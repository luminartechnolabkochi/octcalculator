import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent  {
  result=0

    add(inpt1:any,inpt2:any){
      let n1=+inpt1.value
      let n2=+inpt2.value
      this.result=n1+n2
      console.log(this.result);
      
    
    }


}
