import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'My Cart',
      url: '/mycart',
      icon: 'cart'
    },
    {
      title: 'Wishlist',
      url: '/wishlist',
      icon: 'heart'
    },
     {
       title: 'My contracts',
      url: '/forward-contracts',
       icon: 'document'
     },
    {
      title: 'My Ratings',
      url: '/my-ratings',
      icon: 'star'
    },
    {
      title: 'Notifications',
      url: '/notifications',
      icon: 'notifications-outline'
    },
    {
      title: 'History',
      url: '/history',
      icon: 'time'
    },
    {
      title: 'Add Product',
      url: '/sell',
      icon: 'add-circle'
    },
    {
      title: 'Apply for loan',
      url: '/apply-for-loan',
      icon: 'briefcase'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    },
    // {
    //   title: 'Settings',
    //   url: '/settings',
    //   icon: 'settings'
    // },
    {
      title: 'Log out',
      url: '/',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.show();
      this.statusBar.styleLightContent();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#1473E6');
    });
  }
}

