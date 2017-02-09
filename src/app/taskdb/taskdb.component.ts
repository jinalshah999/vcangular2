import { Component, OnInit } from '@angular/core';
import { TaskdbserviceService } from '../taskdbservice.service';
import { Task } from '../tasks/task';
@Component({
  selector: 'app-taskdb',
  templateUrl: './taskdb.component.html',
  styleUrls: ['./taskdb.component.css']
})
export class TaskdbComponent implements OnInit {

allTask:Task[]=[];
  constructor(public _data:TaskdbserviceService) { }

  ngOnInit() {


    this._data.getAllTask().subscribe(

      (data:Task[])=>{
        this.allTask=data;
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log("complete");
      }
    );
  }
deleteTask(item:Task){
  this._data.deleteTask(item).subscribe(
    (data:any)=>{
       this.allTask.splice(this.allTask.indexOf(item),1); 
    },
    function(error){

    }
    
  );
}
}
