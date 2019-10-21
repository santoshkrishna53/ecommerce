import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  name
  id 
  quantity
  description
  Price
  Image
  Category 
 

 
  constructor(private user: UserService,private http: HttpClient ) { }

  ngOnInit() {}
  update(){
   
    var data = {
      name: this.name,
      id: this.id,
      quantity: this.quantity,
      description: this.description,
      Price: this.Price,
      Image: this.Image,
      Category: this.Category
    }
    this.user.addpro(data);
  }

}
