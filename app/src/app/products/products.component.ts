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
  filter: any[] = [false,false,false];
  filtersubs: Subscription;
  subscription: Subscription;
  usersubs: Subscription;
  authsubs: Subscription;
  constructor( private httpClient: HttpClient,private share: SharedDataService, private UserService: UserService) {
    this.subscription = this.share.getProducts().subscribe(data => {
      if(this.test(data)){console.log("refresh");this.products.push(data);}
      
      
    })
    this.usersubs = this.UserService.profile().subscribe(product => {
      if (product) {
        this.kart.pop();
        this.kart.push(product.cart);
      }
    }
    )
    this.authsubs = this.UserService.user_status().subscribe(data => {
     
      this.auth = data;
    })
    this.filtersubs = this.share.get_filter().subscribe(data => {
      this.filter = data;
    })
  }
  
  
  
  ngOnInit(){}
  async addtokart(pp){
    var product = {
      name: pp.name,
      price: pp.price,
      quantity: pp.quantity,
      _id: pp._id
    }
    var flag = false;
    for(var pro in this.kart[0]){
      if(this.kart[0][pro]._id == product._id){
        this.kart[0][pro].quantity+=1;
        flag = true;
      }
    }
    if(flag){
   
      this.kart[0].quantity = this.kart[0].quantity + 1;
    }
    else{
      product.quantity = 1;
      this.kart[0].push(product);
    }
    let result = await this.UserService.updatekart(this.kart[0]);
    
    }
    test(data){
     
      if(this.filter[0] && this.filter[1] && this.filter[2]){
       
        return true
      }
      if(!this.filter[0] && !this.filter[1] && !this.filter[2]){
       
        return true
      }
      if(data.Category == "M" && this.filter[0]){return true;}
      if(data.Category == "L" && this.filter[1]){return true;}
      if(data.Category == "D" && this.filter[2]){return true;}
      else{return false}
      
      
    }
    
  }
  
  


  