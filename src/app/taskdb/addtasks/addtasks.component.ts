import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskdbserviceService } from '../../taskdbservice.service';
@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrls: ['./addtasks.component.css']
})
export class AddtasksComponent implements OnInit {
status:string[]=[
  'done',
  'pending'
];
model = {Id:'',Title:'',Status:'pending'};
  constructor(public _data:TaskdbserviceService,public _router:Router) { }

  ngOnInit() {
  }
taskSubmit(){


  this._data.addTask(this.model).subscribe(
    (data:any)=>{
      this._router.navigate(["/taskdb"])
    },
    function(error){

    },
    function(){

    }
  );
}
}
