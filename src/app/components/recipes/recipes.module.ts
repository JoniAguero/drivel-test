import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        NgbModule,
        RecipesRoutingModule,
        SharedModule,
        RouterModule
    ],
    declarations: [
        RecipesComponent
    ],
    exports: [
        RecipesComponent
    ]
})
export class RecipesModule { }
