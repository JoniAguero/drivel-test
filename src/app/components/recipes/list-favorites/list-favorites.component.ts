import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe.model';
import { RecipesService } from 'src/app/core/services';

@Component({
  selector: 'app-list-favorites',
  templateUrl: './list-favorites.component.html',
  styleUrls: ['./list-favorites.component.css']
})
export class ListFavoritesComponent implements OnInit {

  recipes: Recipe [] = [];

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.loadRecipes();
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
