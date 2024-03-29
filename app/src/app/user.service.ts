import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import {MatSnackBar} from '@angular/material/snack-bar';
import { RouterModule, Routes,Router } from '@angular/router';
import {SharedDataService} from './shared-data.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new Subject<any>();
  private profil = new Subject<any>();
  private login_status = new Subject<boolean>();
  private login_failed = new Subject<boolean>();
  
  constructor(private SharedDataService: SharedDataService,private http: HttpClient,private _snackBar: MatSnackBar,private router: Router) { }
  public login(body: any): any {
    this.http.post("https://server17bce0547.herokuapp.com/auth/login",body,{headers : new HttpHeaders().append('content-Type','application/json'),withCredentials: true}).subscribe(data  => {
     if(data){this.user.next(data);this.profil.next(data);this.login_status.next(true);this.router.navigate(['/products']); this._snackBar.open('Successfully logined','',{
      duration: 3000
    });}
    },error  => {
      
      this._snackBar.open('Please Check Credentials','',{
        duration: 3000
      });
      
  });
    return this.user.asObservable()
   
    
  }
  profile() {
    this.http.post("https://server17bce0547.herokuapp.com/auth/profile","",{headers : new HttpHeaders().append('content-Type','application/json'),withCredentials: true}).subscribe(data  => {
      if(data){this.profil.next(data);this.login_status.next(true)}
     },error  => {
      
       if(error.statusText == "Unauthorized"){
         

       }
      });
     return this.profil.asObservable()
  }
  updatekart(body: any){
    console.log("updatekart")
    console.log(body)
    this.http.post("https://server17bce0547.herokuapp.com/auth/updatekart",body,{headers : new HttpHeaders().append('content-Type','application/json'),withCredentials: true}).subscribe(data  => {
     if(data){
       this.profile();
       
      }
    },error  => {});
  }
  register(body: any){
    return this.http.post('https://server17bce0547.herokuapp.com/auth/register',body,{
      observe: 'body',
      headers : new HttpHeaders().append('content-Type','application/json')
    });

  }
  getkart(body: any){
    return this.http.post('https://server17bce0547.herokuapp.com/api/kart',body,{
      observe: 'body',
      headers : new HttpHeaders().append('content-Type','application/json'),
      withCredentials: true
      
    });
  }
  logout(){
    this.http.post("https://server17bce0547.herokuapp.com/auth/logout","",{headers : new HttpHeaders().append('content-Type','application/json'),withCredentials: true}).subscribe(data  => {
      if(data){this.profil.next(null);this.user.next(null);}
     },error  => {});
     this._snackBar.open('logged out','',{ duration: 3000 });
    this.login_status.next(false);
     this.router.navigate(['/products']);

  }
  user_status(){
    return this.login_status.asObservable();  
  }
  send_billing(data){
    this.http.post("https://server17bce0547.herokuapp.com/auth/billing",data,{headers : new HttpHeaders().append('content-Type','application/json'),withCredentials: true}).subscribe(data  => {
      if(data){this.profile();this._snackBar.open('Order Placed Successfully','',{
        duration: 3000
      });}
     },error  => {});

  }
  update_user(data){
    this.http.post("https://server17bce0547.herokuapp.com/auth/UpdateUser",data,{headers : new HttpHeaders().append('content-Type','application/json'),withCredentials: true}).subscribe(data  => {
      if(data){}
      },error  => {});
     this.logout();
     this._snackBar.open('Succesufully updated, please login again','',{
      duration: 5000
    });


  }
  update_password(data){
    this.http.post("https://server17bce0547.herokuapp.com/auth/UpdatePassword",data,{headers : new HttpHeaders().append('content-Type','application/json'),withCredentials: true}).subscribe(data  => {
      if(data){this.profile();this._snackBar.open('Updated Successfully, please login again','',{
        duration: 5000
      });}
     },error  => {
      this.profile();this._snackBar.open('PLease enter rigth old password','',{
        duration: 3000
      });

     });this.logout()

  }
  addpro(data){
    this.http.post("https://server17bce0547.herokuapp.com/api/addproduct",data,{headers : new HttpHeaders().append('content-Type','application/json')}).subscribe(data  => {console.log("data sent")})
  }
  updateproductquantity(data){
    this.http.post("https://server17bce0547.herokuapp.com/auth/Updateproductquantity",data,{headers : new HttpHeaders().append('content-Type','application/json'),withCredentials: true}).subscribe(data  => {
      if(data){this.profile();this.SharedDataService.updateProducts()}
     },error  => {});

  }
}
