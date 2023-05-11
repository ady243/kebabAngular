import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { KebabModule } from './kebab/kebab.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        KebabModule,
        ReactiveFormsModule,
        TooltipModule.forRoot()
    ]
})
export class AppModule { }
