import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee  } from '../../models/empolyee.model';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private _employeeService : EmployeeService) { 
    _employeeService.getEmployees()
    .subscribe(data => this.employees = data);
    
    // this.employees = [
    //   { "id": 1, "name": "Amol", "age": 31 },
    //   { "id": 2, "name": "Ganesh", "age": 33 },
    //   { "id": 3, "name": "Sunil", "age": 30 }
    // ];

  }

  ngOnInit(): void {

    //this.employees = this._employeeService.getEmployees();

  }

}