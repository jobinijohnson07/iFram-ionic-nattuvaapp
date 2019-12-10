import { Component, OnInit } from '@angular/core';
import { CurdService } from '../../services/curd.service';
import { environment } from '../../../environments/environment';

const API_URL = environment.API;
@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  data: any = [];
  product: any;

  constructor(public services : CurdService) { }

  ngOnInit() {
    this.getAllProducts()
    this.getSoldProducts()
  }
  
  getAllProducts(){
    let url = API_URL + 'products'
    this.services.getAllProducts(url).subscribe((res) => {
      if (res != null) {
        this.data = res;
      }
    })
  }

  getSoldProducts(){
    let url = API_URL + 'products'
    this.services.getSoldProducts(url).subscribe((res) => {
      if (res != null) {
        this.product = res;
      }
    })
  }

}
