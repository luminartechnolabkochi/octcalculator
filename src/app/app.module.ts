import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import {FormsModule} from '@angular/forms';
import { DivComponent } from './div/div.component';
import { FactorialComponent } from './factorial/factorial.component';
import { NavComponent } from './nav/nav.component';
import { EmployeesComponent } from './employees/employees.component'

// [()]
// FormsModule


@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    SubtractionComponent,
    MultiplicationComponent,
    DivComponent,
    FactorialComponent,
    NavComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
