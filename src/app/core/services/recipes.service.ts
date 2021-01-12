import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  public getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/recipes`);
  }

  public getRecipesFavorites(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/recipes/fav`);
  }

  public createRecipe(recipe: Recipe): Observable<Recipe>  {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<Recipe>(`${environment.apiUrl}/recipes`, recipe, options);
  }

  public removeRecipe(id: string): Observable<Recipe>  {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.delete<Recipe>(`${environment.apiUrl}/recipes/${id}`, options);
  }
}
