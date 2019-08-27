import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(body: any){
    return this.http.post('http://localhost:4000/user/register',body,{
      observe: 'body',
      headers : new HttpHeaders().append('content-Type','application/json')
    });

  }

  login(body: any){
    return this.http.post('http://localhost:4000/user/login',body,{
      observe: 'body',
      withCredentials: true,
      headers : new HttpHeaders().append('content-Type','application/json')
    });

  }
}
