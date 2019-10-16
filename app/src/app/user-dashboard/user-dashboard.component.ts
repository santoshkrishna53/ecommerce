import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {SharedDataService} from '../shared-data.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  products: object;
  subscription: Subscription;
  User: object;
  loaded = false;
  displayedColumns: string[] = ['item', 'cost', 'Quantity'];
  Updateform: FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    username: new FormControl(null,Validators.required),
  })
  UpdatePass: FormGroup = new FormGroup({
    oldpassword: new FormControl(null,Validators.required),
    newpassword: new FormControl(null,Validators.required),
  })

  constructor(private share: SharedDataService, private userservice: UserService, private _snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.subscription = this.userservice.profile().subscribe(data => {
      if(data){
        this.User = data;
        this.products = data;
        this.loaded = true;
        
        
      }
      
    })

  }
  update(){
    if(this.Updateform.valid){
      
      this.userservice.update_user(JSON.stringify(this.Updateform.value));
    }
    else{
      this._snackBar.open('Please entre proper email adress','',{
        duration: 3000
      });
    }


  }
  update_password(){
    if(this.UpdatePass.valid){
      
      this.userservice.update_password(JSON.stringify(this.UpdatePass.value));

    }
    else{
      this._snackBar.open('Please entre all the recquired fields','',{
        duration: 3000
      });

    }

  }

}
