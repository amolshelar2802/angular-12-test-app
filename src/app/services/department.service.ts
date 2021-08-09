import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Department } from '../interfaces/department';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private _url : string = '../assets/data/department.json';
  //private _url : string = 'https://ee2c428e-9950-4fee-82bf-d6ceeb23082f.mock.pstmn.io/GetEmployees';

  constructor(private _http : HttpClient) { }

  getDepartments() : Observable<Department[]> {
    
    return this._http.get<Department[]>(this._url);

  }

  getDepartmentById(id: number) : Observable<Department[]> {
    
    return this._http.get<Department[]>(this._url);

  }

}
