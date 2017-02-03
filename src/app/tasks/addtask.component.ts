import { Component, OnInit } from '@angular/core';
import { TaskdemoService } from '../taskdemo.service';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styles: []
})
export class AddtaskComponent implements OnInit {
status:string[]=[
  'done',
  'pending'
];
model = {Id:'',Title:'',Status:'pending'};
  constructor(public _data:TaskdemoService) { }

  ngOnInit() {
  }
taskSubmit(){

  this._data.addTask(this.model);
}
}
