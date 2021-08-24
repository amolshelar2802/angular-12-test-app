import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentServiceService {

  _url = "http://localhost:3000/enroll";
  constructor(private _httpClient : HttpClient) {

   }

   enroll(user : User)
   {
     
    return this._httpClient.post<any>(this._url, user);

   }

}
