import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';
import { CurdService } from 'src/app/services/curd.service';

const API_URL = environment.API;

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.page.html',
  styleUrls: ['./order-product.page.scss'],
})
export class OrderProductPage implements OnInit {
  details: any;
  data: any;

  constructor(public route : ActivatedRoute,public services: CurdService,
    private toastController: ToastController,public router : Router) { 
    var data = this.route.snapshot.paramMap.get('data')
    this.details = JSON.parse(data)
  }

  ngOnInit() {}

  addToCart() {
    
    this.presentToast('Successfully ordered Product')
    this.router.navigate(['/home']);
    const userId = localStorage.getItem('BuyerId')
    // console.log("userid",userId)
    //   let url = API_URL + userId + '/cart/' + this.details.productId
    // this.services.addToCart(url, this.details).subscribe((res) => {
    //   if (res != null) {
    //     this.data = res;
    //   }
    // })
  }

   /* Toaster */
   async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'OK',
      // color:'green',
      duration: 5000,
      cssClass : 'toast-text'
    });
    toast.onDidDismiss();
    toast.present();
  }

  openClick() {
    this.router.navigateByUrl('/wishlist');
  }

  openChat() {
    this.router.navigateByUrl('/home');
  }
  
  openCart() {
    this.router.navigateByUrl('/mycart');
  }
  
}
