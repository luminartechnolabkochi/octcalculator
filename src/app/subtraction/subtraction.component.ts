import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {
  result=0
  constructor() { }

  ngOnInit(): void {
  }

  subtract(box1:any,box2:any){
    let n1=+box1.value
    let n2=+box2.value
    this.result=n1-n2

  }

}
