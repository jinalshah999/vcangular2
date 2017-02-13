import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentdemo',
  templateUrl: './contentdemo.component.html',
  styleUrls: ['./contentdemo.component.css']
})
export class ContentdemoComponent implements OnInit {
a:number=1000;
  constructor() { }

  ngOnInit() {
  }
onClick(x:number)
{
alert(x+'');
}
}
