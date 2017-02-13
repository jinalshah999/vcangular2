import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contentdemo1',
  templateUrl: './contentdemo1.component.html',
  styleUrls: ['./contentdemo1.component.css']
})
export class Contentdemo1Component implements OnInit {

@Input() result:number=10;
@Output() clicked=new EventEmitter<string>();
b:number=100;
  constructor() { }

  ngOnInit() {
  }
jinal(){
  this.clicked.emit(this.b);
}
}
