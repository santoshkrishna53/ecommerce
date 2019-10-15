import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('0.5s', 
                    style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 100, opacity: 1 }),
            animate('0.1s linear', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class RegisterComponent implements OnInit {
  user: any;
  usersubs: Subscription;


  constructor(private userservice: UserService,private _snackBar: MatSnackBar) {
    this.usersubs = this.userservice.profile().subscribe(data => {
      if(data){
        this.user = data;
        // this.user.push(data);
        // console.log(data);
      }
    })
   }

  ngOnInit() {
  }
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    username: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required)


  })
  loginform: FormGroup = new FormGroup({
    username: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,Validators.required)
  })
  signup(){
    console.log(this.registerForm)
    if(this.registerForm.valid){

      console.log("valid");
      this.userservice.register(JSON.stringify(this.registerForm.value))
      .subscribe(
        data => {console.log(data);},
        error =>{ console.log(error)}
      )

    }
    this._snackBar.open('please enter proper deatils');
  }
  logintest(){
    const profile = this.userservice.profile();
      profile.subscribe((user_details) => {
       console.log(user_details);
      });
   
  }
  login(){
    
    if(this.loginform.valid){
      console.log("valid");
      this.userservice.login(JSON.stringify(this.loginform.value))
      if(this.user == undefined){
        
        

      }
    }
    else{
      this._snackBar.open('Please entre proper email adress','',{
        duration: 3000
      });
    }
  }
}
