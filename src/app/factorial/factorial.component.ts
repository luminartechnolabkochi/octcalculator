import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent implements OnInit {

  num=0
  result=1

  constructor() { }

  ngOnInit(): void {
  }
  fact(){
    this.result=1
    
    for(let i=1;i<=this.num;i++){
      this.result*=i
    }
  }

}
