import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
 @Input() result:number=0;
 @Output() clicked=new EventEmitter<string>();
 //@Output('jinal') clicked=new EventEmitter();
  constructor() { }
onClicked(){
  this.clicked.emit(this.result+'');
}
  ngOnInit() {
  }

}
