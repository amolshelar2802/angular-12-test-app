import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  myId: string = "txtName";
  name: string = "Sunil";
  isDisabled: boolean = true;
  isCheked: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }



}
