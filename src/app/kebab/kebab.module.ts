import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KebabFormComponent } from './components/kebab-form/kebab-form.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        KebabFormComponent,
    
    
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        KebabFormComponent,
    
    ]
})
export class KebabModule { }
