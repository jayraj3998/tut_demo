import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcy',
  templateUrl: './calcy.component.html',
  styleUrls: ['./calcy.component.css']
})
export class CalcyComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  x="";
  no1:number=0;
  no2:number=0;
  flag:number=0;


   onclick1(m){
     this.x +=m;
   }
   onadd(){
     this.no1=parseInt(this.x)
     this.flag=1
     this.x=""
   }
   onsub(){
    this.no1=parseInt(this.x)
    this.flag=2
    this.x=""
  }
  onmul(){
    this.no1=parseInt(this.x)
    this.flag=3
    this.x=""
  }
  ondiv(){
    this.no1=parseInt(this.x)
    this.flag=4
    this.x=""
  }

   oneq(){
     this.no2=parseInt(this.x)
     if(this.flag==1)
     {
       this.x=(this.no1+this.no2)+""
     }
     else if(this.flag==2)
     {
        this.x=(this.no1-this.no2)+""
     }
     else if(this.flag==3)
     {
       this.x=(this.no1*this.no2)+""
     }
     else if(this.flag==4)
     {
       this.x=(this.no1/this.no2)+""
     }
   }
}
