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
   
    if(this.registerForm.valid){

     
      this.userservice.register(JSON.stringify(this.registerForm.value))
      .subscribe(
        data => {this._snackBar.open('Account created successfully','',{duration: 3000});},
        error =>{this._snackBar.open(error,'',{duration: 3000});}
      )

    }
    else{
      this._snackBar.open('please enter proper deatils','',{duration: 3000});
  }

    }
    
  
  login(){
    
    if(this.loginform.valid){
      
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
