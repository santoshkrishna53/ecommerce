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

  constructor( private UserService: UserService, private share: SharedDataService) { 
    this.status = this.UserService.user_status().subscribe(data => {
      this.user_status = data;
      console.log(data);
    })
    this.cart_total_subs = this.share.get_cart_total().subscribe(data => {
      this.cart_total = data;
      console.log(this.cart_total);
    })

  }

  ngOnInit() {
  }
  async Logout(){
    this.UserService.logout();
    console.log("logging out");
    console.log(this.user_status);
   
  }

}
