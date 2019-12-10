import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { Select } from '@ngxs/store';
import { Observable, from } from 'rxjs';
import { AppState } from '../../app-state/state/user.state';
import { StateService } from '../../services/state.service';

import { CurdService } from '../../services/curd.service';
import { environment } from '../../../environments/environment';

const API_URL = environment.API;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
 
  product: any = [];
  
  
  @ViewChild('slides', { static: true}) slides: any;
  languages: any =[];

  sliderConfig = {
    slidesPerView: 1.3,
    spaceBetween: 1,
    centeredSlides: true,
    };
  selectedLag: string;
  store: any;
  
  constructor( private router : Router, public translate: TranslateService, private userService: StateService,public services : CurdService) { }
    
  ngOnInit(){
    this.getAllProducts()
    this.userService.getUser().then(res => {
      res.forEach(user => {
        this.selectedLag = user.languages;
        this.getAppLag(this.selectedLag);
      });
    });
  }  

  getAllProducts(){
    let url = API_URL + 'products'
    this.services.getAllProducts(url).subscribe((res) => {
      if (res != null) {
        this.product = res;
        console.log("print value",this.product);
        
      }
    })
  }

  goto(value) {
    this.router.navigate(['preview-farm',{"page": value}]);
  } 

  getAppLag(language) {
    this.translate.use(language);
  }

  orderProduct(data){
    var details = JSON.stringify(data)
    this.router.navigate(['order',{"data": details}]);
  }
}