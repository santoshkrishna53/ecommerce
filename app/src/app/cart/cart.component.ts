import { Component, OnInit } from '@angular/core';
import {SharedDataService} from '../shared-data.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products=[];

  constructor(private share: SharedDataService) { }

  ngOnInit() {
    const studentsObservable = this.share.getStudents();
        studentsObservable.subscribe((studentsData) => {
            for(var data in studentsData){
              this.products.push(studentsData[data]);
            }
            console.log(this.products)
        });
  }

}
