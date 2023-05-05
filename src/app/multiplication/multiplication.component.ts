import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {
  num1=0
  num2=0
  result=0

  constructor() { }

  ngOnInit(): void {
  }
  mul(){
    this.result=this.num1*this.num2
  }


}
