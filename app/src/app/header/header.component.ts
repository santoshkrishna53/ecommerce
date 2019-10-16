import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  checked  = false;
  labelPosition = 'after';
  user_status = false;
  cart_total = 0;
  status: Subscription;
  cart_total_subs: Subscription;
  subscription: Subscription;

  constructor( private UserService: UserService, private share: SharedDataService) { 
    this.status = this.UserService.user_status().subscribe(data => {
      this.user_status = data;
      
    })
    this.cart_total_subs = this.share.get_cart_total().subscribe(data => {
      this.cart_total = data;
      
    })
    this.subscription = this.UserService.profile().subscribe(data => {
      if (data) {
        var total_items = 0;
        for(var i in data.cart){
          total_items+=(data.cart[i].quantity);
          
        }
        this.share.set_cart_total(total_items);
      }
    }
    )
    
  }

  ngOnInit() {
  }
  async Logout(){
    this.UserService.logout();
    console.log("logging out");
    console.log(this.user_status);
   
  }

}
