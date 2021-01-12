import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/core/models/recipe.model';
import { RecipesService } from 'src/app/core/services';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {

  recipes: Recipe [] = [];

  constructor(private recipesService: RecipesService, private router: Router) { }

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe((data: any) => {
      this.recipes = data.recipes.results;
    })
  }

  addToFavorite(recipe: Recipe) {
    this.recipesService.createRecipe(recipe).subscribe(() => {
      this.router.navigate(['favorites']);
    })  
  }

}
