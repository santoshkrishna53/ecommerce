import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new Subject<any>();
  private profil = new Subject<any>();
  

 

  constructor(private http: HttpClient) { }
  public login(body: any): any {
    this.http.post("http://localhost:4000/auth/login",body,{headers : new HttpHeaders().append('content-Type','application/json'),withCredentials: true}).subscribe(data  => {
     if(data){this.user.next(data);this.profil.next(data);}
    },error  => {console.log("Error", error);});
    return this.user.asObservable()
   
    
  }
  profile() {
    this.http.post("http://localhost:4000/auth/profile","",{headers : new HttpHeaders().append('content-Type','application/json'),withCredentials: true}).subscribe(data  => {
      if(data){this.profil.next(data);}
     },error  => {console.log("Error", error);});
     return this.profil.asObservable()
  }
  updatekart(body: any){
    this.http.post("http://localhost:4000/auth/updatekart",body,{headers : new HttpHeaders().append('content-Type','application/json'),withCredentials: true}).subscribe(data  => {
     if(data){
       this.profile();
       
      }
    },error  => {console.log("Error", error);});
    
    

  }
  



  


 

  register(body: any){
    return this.http.post('http://localhost:4000/auth/register',body,{
      observe: 'body',
      headers : new HttpHeaders().append('content-Type','application/json')
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
