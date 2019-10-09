import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  private _opened: boolean = false;
  products;
  dock = true;
  push = 'push';
  configUrl = "http://localhost:4000/api/prod";
  constructor(private http: HttpClient) { }
  ngOnInit() {}
  async get_products(){
    let result = await this.http.post(this.configUrl,{}).subscribe(data => {console.log("check");console.log(data);return data;},error => {console.log("Error", error);});
    console.log("products from after await",result);
  }
  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}
