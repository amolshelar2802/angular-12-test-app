import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/empolyee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url : string = '../assets/data/employee.json';
  //private _url : string = 'https://ee2c428e-9950-4fee-82bf-d6ceeb23082f.mock.pstmn.io/GetEmployees';

  constructor(private _http : HttpClient) { }

  getEmployees() : Observable<Employee[]> {
    
    return this._http.get<Employee[]>(this._url);

  }

  // getEmployees()  {
  //   return [
  //     {"id": 1, "name": "Amol", "age": 28},
  //     {"id": 2, "name": "Ganesh", "age": 30},
  //     {"id": 3, "name": "Sunil", "age": 29},
  //     {"id": 4, "name": "Vikas", "age": 35},
  //   ];

  // }

}
