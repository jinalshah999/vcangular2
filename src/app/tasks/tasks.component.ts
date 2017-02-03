import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskdemoService } from '../taskdemo.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
allTask:Task[]=[];
  
  constructor(public _data:TaskdemoService) { }

  ngOnInit() {

        this.allTask=this._data.getAllTask();
  }
deleteTask(x)
{
  this._data.deleteTask(x);
}
}
