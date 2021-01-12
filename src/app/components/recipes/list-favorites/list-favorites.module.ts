import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListFavoritesComponent } from './list-favorites.component';
import { ListFavoritesRoutingModule } from './list-favorites-routing.module';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, NgbModule, ListFavoritesRoutingModule],
  declarations: [ListFavoritesComponent],
  exports: [ListFavoritesComponent],
})
export class ListFavoritesModule {}
