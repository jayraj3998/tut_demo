import { Component, OnInit } from '@angular/core';
import { empclass } from "./empclass";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  flag:boolean=false;
  e_id:number;
  e_name:string;
  e_des:string;
  e_sal:number;
  e_status:string='yes';
  arr: empclass[] = [
     new empclass(101, "ayz", "manager",5000,"yes"),
     new empclass(102, "xyz", "peon",500,"no")
  ];
  onDelete(item: empclass) {
    this.arr.splice(this.arr.indexOf(item), 1);
  }
  onAdd(){
    this.arr.push(new empclass(this.e_id,this.e_name,this.e_des,this.e_sal,this.e_status));
  }
  onUpdate(item:empclass){

    if(item.e_status=="yes"){
      item.e_status="no";
    }
    else{
      item.e_status="yes";
    }
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
