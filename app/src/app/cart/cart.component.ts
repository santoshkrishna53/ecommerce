import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { UserService } from "../user.service";
import { Subscription } from 'rxjs';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnDestroy {
  products: any[] = [];
  subscription: Subscription;
  trash = faTrash;
  total;
  displayedColumns: string[] = ['item', 'cost', 'Quantity','Price','Action'];

  constructor(private share: SharedDataService, private userservice: UserService) {
    this.subscription = this.userservice.profile().subscribe(data => {
      if (data) {
        this.products.pop();
        this.products.push(data.cart);
        console.log(data);
        this.total = 0
        for(var i in this.products[0]){
          this.total+=(this.products[0][i].quantity*this.products[0][i].price)
        }
      }
    }
    )
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  remove_item(product){
    console.log(product);
    var i = this.products[0].indexOf(product);
    if(this.products[0][i].quantity == 1){
      this.products[0].splice(i,1);
    }
    else{
      this.products[0][i].quantity-=1;
    }
    this.userservice.updatekart(this.products[0])
  }
}
