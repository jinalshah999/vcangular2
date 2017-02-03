import { Injectable } from '@angular/core';
import { Task } from './tasks/task';
@Injectable()
export class TaskdemoService {

allTask:Task[]=[
    new Task("1","write email to manager","done"),
    new Task("2","Push code to github","pending")
  ];
  getAllTask(){
    return this.allTask;
  }
  deleteTask(x:Task){
    this.allTask.splice(this.allTask.indexOf(x),1);
  }
  addTask(x:Task){
    this.allTask.push(x);
  }
  constructor() { }

}
