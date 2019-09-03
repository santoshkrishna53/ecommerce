import { Component, OnInit } from '@angular/core';
import {SharedDataService} from '../shared-data.service';
import {UserService} from "../user.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products=[];

  constructor(private share: SharedDataService,private userservuce: UserService) { }

  ngOnInit() {
    const product = this.share.getProducts();
    product.subscribe((pro) => {
            for(var data in pro){
              this.products.push(pro[data]);
            }
            console.log(this.products)
        });

  
  
  }

}
