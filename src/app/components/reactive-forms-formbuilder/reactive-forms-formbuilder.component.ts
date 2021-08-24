import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-formbuilder',
  templateUrl: './reactive-forms-formbuilder.component.html',
  styleUrls: ['./reactive-forms-formbuilder.component.css']
})
export class ReactiveFormsFormbuilderComponent implements OnInit {

  constructor(private _formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  registrationForm = this._formBuilder.group(
    {
      userName : ['Sunil'],
      password : ['abc'],
      confirmPassword : ['abc'],
      address : this._formBuilder.group(
        {
          city : ['KYN'],
          state : ['MH'],
          zip : ['421306']
        }
      )
    }
  );




}
