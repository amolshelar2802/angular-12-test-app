import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {

  public name = "Code Brigade";

  public firstName = "Amol";
  public lastName = "Shelar"; 
  public numberToSquare = 2;
  public minutes = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
