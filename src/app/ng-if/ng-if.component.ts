import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  public showText = true;
  public name = "Amol";
  constructor() { }

  ngOnInit(): void {
  }

  show(): boolean {
    return this.showText;
  }


}
