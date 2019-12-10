import { Component, OnInit } from '@angular/core';
import { CurdService } from '../../services/curd.service';
import { environment } from '../../../environments/environment';

const API_URL = environment.API;

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage implements OnInit {
  private selectedItem: any;
  data: any = [];

  constructor(public services : CurdService) { }

  ngOnInit() {
    this.getUserDetails()
    // this.getCart()
  }
  
  getUserDetails(){
    let url = API_URL + 'products'
    this.services.getUserDetails(url).subscribe((res) => {
      if (res != null) {
        this.data = res;
      }
    })
  }

  getCart(){
    const id = localStorage.getItem('BuyerId')
    console.log("farm message",this.getCart)
    let url = API_URL + id + '/cart'
    this.services.getCart(url).subscribe((res) => {
      if (res != null) {
        this.data = res;
      }
    })
  
  }
}
