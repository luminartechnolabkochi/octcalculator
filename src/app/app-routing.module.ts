import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {path:"add",component:AdditionComponent},
  {path:"sub",component:SubtractionComponent},
  {path:"mul",component:MultiplicationComponent},
  {path:"employees",component:EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
