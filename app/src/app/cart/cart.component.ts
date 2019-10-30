import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { UserService } from "../user.service";
import { Subscription } from 'rxjs';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnDestroy {
  Billing: FormGroup = new FormGroup({
    FirstName: new FormControl(null,Validators.required),
    LastName: new FormControl(null,Validators.required),
    AdressLine1: new FormControl(null,Validators.required),
    AdressLine2: new FormControl(null,Validators.required),
    AdressLine3: new FormControl(null,Validators.required),
    State: new FormControl(null,Validators.required),
    PinCode: new FormControl(null,Validators.required)
    


  })
  states = [ "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry" ]
  products: any[] = [];
  subscription: Subscription;
  trash = faTrash;
  total;
  total_items;
  displayedColumns: string[] = ['item', 'cost', 'Quantity','Action','Price'];

  constructor(private share: SharedDataService, private userservice: UserService,private _snackBar: MatSnackBar) {
    this.subscription = this.userservice.profile().subscribe(data => {
      if (data) {
        this.products.pop();
        this.products.push(data.cart);
      
        this.total = 0;
        this.total_items = 0;
        for(var i in this.products[0]){
          this.total+=(this.products[0][i].quantity*this.products[0][i].price)
          this.total_items+=(this.products[0][i].quantity);
         
        }
        
        this.share.set_cart_total(this.total_items);
      }
    }
    )
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  remove_item(product){
   
    var i = this.products[0].indexOf(product);
    if(this.products[0][i].quantity == 1){
      this.products[0].splice(i,1);
    }
    else{
      this.products[0][i].quantity-=1;
    }
    this.userservice.updatekart(this.products[0])
  }
  Billing_(){
    var billing_items = [];
    for(var i in this.products[0]){
      billing_items.push(this.products[0][i].name)
    }
    
    if(this.Billing.valid){
      var data = {
        cart: billing_items,
        billing: this.Billing.value
      }
      
      this.userservice.send_billing(JSON.stringify(data));

    }
    else{
      
      this._snackBar.open('Invalid billing details','',{
        duration: 3000
      });
      
    }
  }
}
