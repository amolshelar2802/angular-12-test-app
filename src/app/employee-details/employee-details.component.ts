import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/empolyee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private _employeeService : EmployeeService) { 
    //this.employees = _employeeService.getEmployees();

    _employeeService.getEmployees().subscribe(data => this.employees = data);

  }

  ngOnInit(): void {
  }

}
