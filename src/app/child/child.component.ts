import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
//import * as EventEmitter from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('parentData') public message="";

  @Output() public childEvent = new EventEmitter(); 


  constructor() { }

  ngOnInit(): void {
  }

  fireEvent()
  {
    this.childEvent.emit("Hi Parent...this is your child");
  }

}
