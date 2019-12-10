import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { Platform } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { CurdService } from '../../services/curd.service';
import { environment } from 'src/environments/environment';
import { format } from 'url';
import { LoadingController, ToastController, AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

const STORAGE_KEY = 'my_images';
const API_URL = environment.API;

@Component({
  selector: 'app-sell',
  templateUrl: './sell.page.html',
  styleUrls: ['./sell.page.scss'],
})

export class SellPage {

  customPopoverOptions: any = {};
  data: any = [];
  file: any;
  storage: any;
  webview: any;
  products: any = {};
  imageBase: any;
  uniqueId: any;
  ProductID: any;
  type: string;
  image: any;
  fileBlob;
  b64Blob;

  constructor(private camera: Camera, private platform: Platform,
    public services: CurdService,private loadingController: LoadingController,
    private toastController: ToastController,public router: Router) {
      this.type = 'text';
     }

  openCam() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }
    this.camera.getPicture(options).then((imageData) => {

      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // this.image = (<any>window).Ionic.WebView.convertFileSrc(imageData);

      this.imageBase = "data:image/jpeg;base64,"+imageData

    }, (err) => {
      // Handle error
      alert("error " + JSON.stringify(err))
    });
  }

  uploadFile(event) {
    if (event.target.value) {
      const file = event.target.files[0];
      const type = file.type;
      this.changeFile(file).then((base64: string): any => {
        this.imageBase = base64;
      });
    } else alert('Nothing')
  }

  changeFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  ngOnInit() {
 
   this.platform.ready().then(() => {
       this.loadStoredImages();
     });
    this.getSellerDetails()
  }

  getSellerDetails() {
    let url = API_URL + 'products'
    this.services.getSellerProducts(url).subscribe((res) => {
      if (res != null) {
        this.data = res;
      }
    })
  }

  async addProduct() {
    const loading = await this.loadingController.create({
      spinner: 'lines',
      message: 'Please wait',
    });

    await loading.present().then(() => {
    let buyer = Math.random() * 10
    let url = API_URL + 'products'
    this.products['buyerId'] = this.getBuyerId();
    this.products['imageUrl'] = this.imageBase;
    this.products['productId'] = this.getProductId();
    this.services.addProduct(url, this.products).then((res) => {
      if (res != null) {
        this.data = res;
        loading.dismiss();
        this.presentToast('Successfully Added Product')
      }
    }, (err) => {
        this.presentToast('Successfully Added Product')
        this.router.navigate(['/home']);
        loading.dismiss();
    });
  })
  }

  getBuyerId() {
    const id = new Date();
    const time =  id.getTime();
    const buyerId ="buyer"+ time;
    return buyerId; 
  }

  getProductId() {
    const id = new Date();
    return id.getTime();
  }


  loadStoredImages() {
    this.storage.get(STORAGE_KEY).then((images: string) => {
      if (images) {
        let arr = JSON.parse(images);
        this.image = [];
        console.log("The image",this.image);
        for (let img of arr) {
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.image.push({ name: img, path: resPath, filePath: filePath });
        }
      }
    });
  }

  pathForImage(img: any) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  typeChange(){
    this.type = 'date'
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
}
