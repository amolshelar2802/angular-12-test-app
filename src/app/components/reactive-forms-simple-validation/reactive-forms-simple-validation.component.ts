import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnrollmentServiceService } from 'src/app/services/enrollment-service.service';
import { RegistrationServiceService } from 'src/app/services/registration-service.service';
import { PasswordValidator } from 'src/app/shared/password.validator';
import { forbiddenNameValidator } from 'src/app/shared/username.validator';


@Component({
  selector: 'app-reactive-forms-simple-validation',
  templateUrl: './reactive-forms-simple-validation.component.html',
  styleUrls: ['./reactive-forms-simple-validation.component.css']
})
export class ReactiveFormsSimpleValidationComponent implements OnInit {

  //registrationForm : FormGroup;
  get userName()
  {
    return this.registrationForm.get("userName");
  }

  get alternateEmails()
  {
    return this.registrationForm.get("alternateEmails") as FormArray;
  }

  addAlternamteEmail()
  {
    this.alternateEmails.push(this._formBuilder.control(''));
  }

  onSubmit()
  {
    console.log(this.registrationForm.value);
    this._registrationService.registerUser(this.registrationForm.value)
    .subscribe(
      response => console.log('success!!!'),
      error => console.log('error')
    );
  }

  constructor(private _formBuilder : FormBuilder, private _registrationService : RegistrationServiceService) { }

  ngOnInit(): void {
  }

  registrationForm = this._formBuilder.group(
    {
      userName : ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator]],
      email : [''],
      subscribe : [false],
      password : [''],
      confirmPassword : [''],
      address : this._formBuilder.group(
        {
          city : [''],
          state : [''],
          zip : ['']
        }
      ),
      alternateEmails : this._formBuilder.array([])
    }, { validator: PasswordValidator }
  );




}
