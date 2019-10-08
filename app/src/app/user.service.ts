import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 

  constructor(private http: HttpClient) { }

  


 

  register(body: any){
    return this.http.post('http://localhost:4000/auth/register',body,{
      observe: 'body',
      headers : new HttpHeaders().append('content-Type','application/json')
    });

  }

  login(body: any){
    return this.http.post('http://localhost:4000/auth/login',body,{
      observe: 'body',
      headers : new HttpHeaders().append('content-Type','application/json'),
      withCredentials: true
    });

    

  }
  logintest(body: any){
    return this.http.post('http://localhost:4000/auth/profile',body,{
      observe: 'body',
      headers : new HttpHeaders().append('content-Type','application/json'),
      withCredentials: true
      
    });
  }

  getkart(body: any){
    return this.http.post('http://localhost:4000/api/kart',body,{
      observe: 'body',
      headers : new HttpHeaders().append('content-Type','application/json'),
      withCredentials: true
      
    });
  }
}
