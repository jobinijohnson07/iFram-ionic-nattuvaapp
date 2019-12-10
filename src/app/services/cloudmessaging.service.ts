// import { Injectable } from '@angular/core';
// import * as firebase from 'firebase';
// import 'rxjs/add/operator/take';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject'
// // import { UserService } from './user.service';

// @Injectable()
// export class CloudMessagingService {

//   messaging = firebase.messaging()
//   currentMessage = new BehaviorSubject(null)

//   constructor(
//     // public userService : UserService
//     ) { }

//  //function to update cloud messaging token
// //  async updateToken(token) {
//   // this.userService.updateUserField({'fcmToken':token})
//   //   .then(()=>{
//   //    return Promise.resolve("updated token");
//   //   })
//   //   .catch((err)=>{
//   //    return Promise.reject(err.message);
//   //   })
// // }

//   //function to request permission for fcm notifications
//   async getPermission() {
//     debugger
//     this.messaging.requestPermission()
//       .then(() => {
//         return this.messaging.getToken()
//       })
//       .then(async (token) => {
//         console.log("token",token)
//         // return await this.updateToken(token)
//       })
//       .catch((err) => {
//         return err;
//       });
//   }
//   //on receiving message 
//   receiveMessage() {
//     debugger
//     this.messaging.onMessage((payload) => {
//       console.log("payload",payload)
//     });

//   }
// }