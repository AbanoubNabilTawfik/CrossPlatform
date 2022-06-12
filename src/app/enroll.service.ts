import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private http:HttpClient) { }

  _url:string="http://localhost:3000/enrollment";
  enroll(user:User)
  {
    return this.http.post<any>(this._url,user);
  }
}
