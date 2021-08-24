import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registrationForm = new FormGroup({
    userName : new FormControl('Amol'),
    password : new FormControl('ABC'),
    confirmPassword : new FormControl('ABC'),

    address : new FormGroup({
      city : new FormControl(''),
      state : new FormControl(''),
      zip : new FormControl(''),
    })

  });

  setValueData()
  {
    this.registrationForm.setValue({
      userName : 'Amol',
      password : 'yashu',
      confirmPassword : 'yashu',
      address : {
        city : 'Kalyan',
        state : 'MH',
        zip : '421306',
      }
    });
  }

  patchValueData()
  {
    this.registrationForm.patchValue({
      userName : 'Ganesh',
      password : 'adi',
      confirmPassword : 'adi',
    });
  }

}
