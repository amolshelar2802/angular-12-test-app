import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  name:string = "Amol";
  siteUrl:string = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  greetUser() : string
  {
    return "Welcome " + name;
  }

}
