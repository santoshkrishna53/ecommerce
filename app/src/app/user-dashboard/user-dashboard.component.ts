import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {SharedDataService} from '../shared-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  products: object;
  subscription: Subscription;
  User: object;
  displayedColumns: string[] = ['item', 'cost', 'Quantity'];

  constructor(private share: SharedDataService, private userservice: UserService) { }

  ngOnInit() {
    this.subscription = this.userservice.profile().subscribe(data => {
      if(data){
        this.User = data;
        this.products = data;
        console.log(data.orders[0].cart);
        for(var i in data.orders){
          console.log(i)
        }
        // console.log(this.User.orders.cart);

      }
      
    })

  }

}
