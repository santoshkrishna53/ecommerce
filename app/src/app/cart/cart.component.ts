import { Component, OnInit } from '@angular/core';
import {SharedDataService} from '../shared-data.service';
import {UserService} from "../user.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products;

  constructor(private share: SharedDataService,private userservice: UserService) { }

  ngOnInit() {
    this.getkart()

  
  
  }
  getkart(){
    console.log("get kart function")
    this.userservice.getkart('').subscribe(
    data => {console.log("kart");this.products = data;console.log(data)},
    error =>{ console.log(error)}
  )}
  refresh(){
    this.getkart()
  }
  

}
