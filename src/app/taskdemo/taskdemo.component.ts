import { Component, OnInit } from '@angular/core';
import {task} from'./task'

@Component({
  selector: 'app-taskdemo',
  templateUrl: './taskdemo.component.html',
  styleUrls: ['./taskdemo.component.css']
})
export class TaskdemoComponent implements OnInit {
  status:string[]=[
    'done',
    'pending'
  ];

  arr:task[]=[
    new task(1,'email to your manager','panding'),
    new task(2,'go for running','done'),
    new task(3,'go for movie','panding')
  ];
  constructor() { }

  ngOnInit() {
  }

  ondelete(item:task){
    this.arr.splice(this.arr.indexOf(item),1);
  }
  onadd(x,y,z){
    this.arr.push(new task(x,y,z));
  }
  onupdate(item:task){
    if(item.status=='done'){
    item.status='pending';}
    else{
      item.status='done';

    }
  }

}
