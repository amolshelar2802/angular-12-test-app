import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  successClass : string = "text-success";
  failedClass : string = "text-danger";

  hasError = false;
  isSpecial = true;

  public messageClasses = {

    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial,

  };

  constructor() { }

  ngOnInit(): void {
  }



}
