import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public greet = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    console.log('button clicked');
  }

  changeText(firstName: string, lastName: string)
  {
    this.greet = firstName + " " + lastName;
  }

}
