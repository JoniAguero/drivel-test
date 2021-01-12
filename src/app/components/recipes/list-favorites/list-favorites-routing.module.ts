import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ListFavoritesComponent } from './list-favorites.component';

const routes: Routes = [
  { path: '',
    component: ListFavoritesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListFavoritesRoutingModule { }
