import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.css']
})
export class PipesdemoComponent implements OnInit {

name:string="jinal shah";
myDate=new Date(2016,1,6);
  constructor() { }

  ngOnInit() {
  }

}
