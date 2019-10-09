import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService} from './user.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private products = new Subject<any>();
  private user = new Subject<any>();
  constructor( private httpClient: HttpClient,private userservice: UserService ) { }
  getProducts(){
    this.httpClient.post("http://localhost:4000/api/prod",'').subscribe(data  => {this.products.next(data)},error  => {console.log("Error", error);});
    return this.products.asObservable();
  }
}
