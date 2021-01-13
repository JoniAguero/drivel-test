import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/core/models/recipe.model';
import { RecipesService } from 'src/app/core/services';

@Component({
  selector: 'app-list-favorites',
  templateUrl: './list-favorites.component.html',
  styleUrls: ['./list-favorites.component.css']
})
export class ListFavoritesComponent implements OnInit, OnDestroy {

  recipes: Recipe [] = [];
  subscriptions: Subscription = new Subscription();

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.loadRecipes();
    this.subscriptions.add(this.recipesService.filterRecipes$.subscribe((data: any) => {
      this.recipes = data.recipes;
    }))
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  removeFromFavorite(recipe: Recipe) {
    this.recipesService.removeRecipe(recipe._id).subscribe(() => {
      this.loadRecipes();
    })  
  }

  loadRecipes() {
    this.recipesService.getRecipesFavorites().subscribe((data: any) => {
      this.recipes = data.recipes;
    })
  }

}
