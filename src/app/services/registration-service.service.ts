import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../classes/register-user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  _url = "http://localhost:3000/registerUser";
  constructor(private _httpClient : HttpClient) {

   }

   registerUser(registerUser : RegisterUser)
   {
     
    return this._httpClient.post<any>(this._url, registerUser);

   }
}
