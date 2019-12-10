import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CurdService } from '../../services/curd.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.API;
@Component({
  selector: 'app-preview-farm',
  templateUrl: './preview-farm.page.html',
  styleUrls: ['./preview-farm.page.scss'],
})
export class PreviewFarmPage implements OnInit {
  @ViewChild('slides', { static: true}) slides: any;

  sliderConfig = {
    slidesPerView: 1.3,
    spaceBetween: 0,
    centeredSlides: true,
    };
  pageName: string;
  data: any = [];
  products: any = {};
  imageBase: any;
  constructor(private router : Router,public route : ActivatedRoute,public services: CurdService) { 
    this.pageName = this.route.snapshot.paramMap.get('page')
  }

  ngOnInit() {
    this.addToCart()
  }

  addToCart() {
    let url = API_URL + 'products'
    this.products['imageUrl'] = this.imageBase;
    this.services.addToCart(url, this.products).subscribe((res) => {
      if (res != null) {
        this.data = res;
      }
    })
  }
  
  goto(value) {
    this.router.navigate(['preview-wheat',{"page": value}]);
  }

  openChat() {
    this.router.navigateByUrl('/home');
  }

}
