import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {




  public getProducts(): any {
    const products = new Observable(observer => {
      this.httpClient.post("http://localhost:4000/api/prod",'').subscribe(data  => {observer.next(data)},error  => {console.log("Error", error);});
          
    });

    return products;
}

 


  constructor( private httpClient: HttpClient ) { }
  
}
