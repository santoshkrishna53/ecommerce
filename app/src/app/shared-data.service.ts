import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private products = new Subject<any>();
  private user = new Subject<any>();
  private cart_items_number = new Subject<any>();
  private filter = new Subject<any>();
  constructor( private httpClient: HttpClient ) { 
    this.filter.next([false,false,false])
  }
  getProducts(){
    this.httpClient.post("https://server17bce0547.herokuapp.com/api/prod",'').subscribe(data  => {this.products.next(data)},error  => {console.log("Error", error);});
    return this.products.asObservable();
  }
  updateProducts(){
    this.httpClient.post("https://server17bce0547.herokuapp.com/api/prod",'').subscribe(data  => {this.products.next(data)},error  => {console.log("Error", error);});

  }
  get_cart_total(){
    return this.cart_items_number.asObservable();
  }
  set_cart_total(number){
    this.cart_items_number.next(number);
  }
  set_filter(data){
    this.filter.next(data)
  }
  get_filter(){
    return this.filter.asObservable();
  }

}
