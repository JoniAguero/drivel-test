import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Recipe } from '../models/recipe.model';
import { last } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  filterRecipes = new Subject<Recipe[]>();
  filterRecipes$ = this.filterRecipes.asObservable();

  constructor(private http: HttpClient) { }

  public getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/recipes`);
  }

  public getRecipesFavorites(search?: string ): Observable<any[]> {
    let url = `${environment.apiUrl}/recipes/fav`;
    if (search) { url += `?search=${search}`; }
    return this.http.get<any[]>(url);
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
