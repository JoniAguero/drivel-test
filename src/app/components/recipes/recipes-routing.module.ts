import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      { 
        path: 'recipes',
        loadChildren: () => import('./list-recipes/list-recipes.module').then(m => m.ListRecipesModule)
      },
      { 
        path: 'favorites',
        loadChildren: () => import('./list-favorites/list-favorites.module').then(m => m.ListFavoritesModule)
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
