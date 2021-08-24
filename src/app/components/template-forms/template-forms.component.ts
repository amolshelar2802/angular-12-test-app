import { Component, OnInit } from '@angular/core';
import { EnrollmentServiceService } from 'src/app/services/enrollment-service.service';
import { User } from '../../classes/user';


@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  
  public topicHasError = true;

  topics = ["Angular", "React", "Vue"];

  userModel = new User("Amol", "amol@gmailcom", 131313213, "default", "morning", true)
  
  constructor(private _enrollmentService : EnrollmentServiceService) { }

  ngOnInit(): void {
  }

  validateTopic(value)
  {
    if(value === "default")
    {
      this.topicHasError = true;
    }
    else
    {
      this.topicHasError = false;
    }

  }

  onSubmit()
  {
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
    .subscribe(data => console.log('success', data),
                error => console.log('error!', error));
  }

}
