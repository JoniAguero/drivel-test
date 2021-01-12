import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ListRecipesComponent } from './list-recipes.component';

const routes: Routes = [
  { path: '',
    component: ListRecipesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRecipesRoutingModule { }
