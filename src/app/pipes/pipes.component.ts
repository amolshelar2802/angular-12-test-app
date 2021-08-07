import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {


  public name = "Code Brigade";

  public message = "welcome to angular";

  public person = { 
                    "firstname" : "Amol", 
                    "lastname" : "Shelar" 
                  }
                  
  public datevalue = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
