import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  data=[
    {name:"hari",department:"hr",salary:24000,doj:new Date("12/4/2000")},
    {name:"ravi",department:"hr",salary:24000,doj:new Date("12/4/2000")},
    {name:"ram",department:"IT",salary:24000,doj:new Date("12/4/2000")},
    {name:"vinil",department:"QA",salary:24000,doj:new Date("12/4/2000")},
    {name:"vijay",department:"BA",salary:24000,doj:new Date("12/4/2000")},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
