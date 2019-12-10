import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtillityService {

  constructor(private toaster: ToastController) { }

  async presentToast(msg) {
    const toast = await this.toaster.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
