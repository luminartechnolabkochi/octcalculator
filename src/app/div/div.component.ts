import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent implements OnInit {

  num1=0
  num2=0
  result=0
  constructor() { }

  ngOnInit(): void {
  }
  division(){
    this.result=this.num1/this.num2
  }

}
