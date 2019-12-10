import { Injectable } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = false;
  isLoadingSimple = false;

  constructor(
    public loadingController: LoadingController, 
    public alertController : AlertController,
    public router : Router
  ) {
   }

   /* create the common loading alert */
  async present(value : any, length : any) {
    this.isLoading = true;
    return await this.loadingController.create({
      spinner: 'dots',
      message : "Please wait while uploading " + value + "/ " + length
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  /* create loading alert */
  async presentSimple() {
    this.isLoadingSimple = true;
    return await this.loadingController.create({
      spinner: 'lines',
      message : "Uploadings please wait..",
      duration : 3000
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(res => {console.log('abort presenting')
          });
        }
      });
    });
  }

  /* dismiss the loading slert */
  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

   /* dismiss the loading slert */
  async dismissSimple() {
    this.isLoadingSimple = false;
    return await this.loadingController.dismiss().then(() => console.log('logh dismissed'));
  }
  
}