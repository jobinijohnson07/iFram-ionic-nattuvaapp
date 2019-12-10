import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss'],
})

export class NotificationsPage {
  pushes: any = [];
  constructor() {}

}