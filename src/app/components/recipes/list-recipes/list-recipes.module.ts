import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListRecipesComponent } from './list-recipes.component';
import { ListRecipesRoutingModule } from './list-recipes-routing.module';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, NgbModule, ListRecipesRoutingModule],
  declarations: [ListRecipesComponent],
  exports: [ListRecipesComponent],
})
export class ListRecipesModule {}
