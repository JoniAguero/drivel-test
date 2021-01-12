import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        NgbModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class SharedModule { }
