import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs/operators';
import { User } from 'src/app/core/models';
import { Recipe } from 'src/app/core/models/recipe.model';
import { AuthenticationService, RecipesService } from 'src/app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  searchInput: string = '';

  constructor(public authenticationService: AuthenticationService, private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  filterByIngredients() {
    this.recipesService.getRecipesFavorites(this.searchInput).pipe(last()).subscribe((data: Recipe[]) => {
      this.recipesService.filterRecipes.next(data);
    })
  }

}
