import { Component, OnInit } from '@angular/core';
import { Observable, Subject, observable, Subscription, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from '../shared-data.service';
import {UserService} from './../user.service'; 



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  kart: any[] = [];
  auth = false;
  subscription: Subscription;
  usersubs: Subscription;
  authsubs: Subscription;
  constructor( private httpClient: HttpClient,private share: SharedDataService, private UserService: UserService) {
    this.subscription = this.share.getProducts().subscribe(data => {
      this.products.push(data);
      console.log(this.products);
    })
    this.usersubs = this.UserService.profile().subscribe(product => {
      if (product) {
        this.kart.pop();
        this.kart.push(product.cart);
        // console.log(this.kart);
        this.auth = true;
        
      }
    }
    )
    this.authsubs = this.UserService.user_status().subscribe(data => {
      console.log(data)
      this.auth = data;
    })
  }
  
  
  
  ngOnInit(){}
  async addtokart(product){
    // console.log(product.quantity);
    // console.log(this.kart[0]);
    var flag = false;
    for(var pro in this.kart[0]){
      if(this.kart[0][pro]._id == product._id){
        this.kart[0][pro].quantity+=1;
        flag = true;
      }
    }
    if(flag){
      console.log("product in");
      this.kart[0].quantity = this.kart[0].quantity + 1;
    }
    else{
      product.quantity = 1;
      this.kart[0].push(product);
    }
    let result = await this.UserService.updatekart(this.kart[0]);
    
    }
    // var temp = this.kart[0];
    // console.log(temp);
    // temp.push(product)
   
    // // var temp = this.user[0].cart.push(product)
    // // console.log(temp);
    // this.UserService.updatekart(temp);
  }
  
  


  