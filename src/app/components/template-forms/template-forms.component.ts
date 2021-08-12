import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  
  topics = ["Angular", "React", "Vue"];

  userModel = new User("Amol", "amol@gmailcom", 131313213, "React", "morning", true)
  
  constructor() { }

  ngOnInit(): void {
  }

}
