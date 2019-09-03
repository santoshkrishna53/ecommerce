import { Component, OnInit } from '@angular/core';
import { Observable, Subject, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from '../shared-data.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = [];
  constructor( private httpClient: HttpClient,private share: SharedDataService) { }
  ngOnInit() {
    
    const product = this.share.getProducts();
    product.subscribe((studentsData) => {
            for(var data in studentsData){
              this.products.push(studentsData[data]);
            }
            console.log(this.products)
        });
        console.log(this.products)

  }
  
}
  