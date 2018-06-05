import { Component, OnInit } from '@angular/core';
import {student} from './student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
flag:boolean=false;
stuid:number;
stuname:string;
stugender:string='male';
stunumber:number;
stucity1:string='Ahmedabad';
stuactive:string='yes';
stucity:string[]=[
  'Ahmedabad',
  'surat',
  'baroda'
]
arr:student[]=[]
  onadd(){
    this.arr.push(new student(this.stuid,this.stuname,this.stugender,this.stunumber,this.stuactive,this.stucity1));

  }
  onupdate(item:student){
    if(item.stuactive=="yes")
    item.stuactive="no";
    else
      item.stuactive="yes";

    }
    ondelete(item:student){
      this.arr.splice(this.arr.indexOf(item),1);
    }

    onadd1(){
      if(this.flag==true)
      this.flag=false
      else
      this.flag=true
    }


  constructor() { }

  ngOnInit() {
  }

}
