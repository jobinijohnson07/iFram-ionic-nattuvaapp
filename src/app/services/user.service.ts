// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import 'firebase/firestore';
// import * as firebase from 'firebase';
// // import { TokenContractService } from './token-contract.service';
// import { AuthService } from './auth.service';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { AngularFireAuth } from 'angularfire2/auth';
// import 'rxjs/add/observable/fromPromise';
// import 'rxjs/add/operator/mergeMap';

// import { Observable } from 'rxjs';
// import { promise } from 'protractor';
// let config   = require('../config.json');

// @Injectable()
// export class UserService {

//   constructor(private http:HttpClient,
//               // private tokenService:TokenContractService,
//               private authService:AuthService,
//               private afs:AngularFirestore,
//               private afAuth:AngularFireAuth) { }
//   requestUrl = config.cloudFunctionUrl;

//   // getUserData()
//   // {
//   //   return Observable.fromPromise(this.authService.getUserId()).mergeMap(userId => {
//   //     console.log("userId from observable is  is ",userId);
//   //     return this.afs.collection('users').doc(<any>userId).valueChanges()
//   //   });   
//   // }

//   //update any any userField in firestore database of currently logged in user 
//   async updateUserField(fieldToBeUpdated)
//   {
//     let user        = await this.authService.getLoggedInUser(),
//         userId      = (<any>user).uid,
//         accessToken    = await this.authService.getAccessToken();
//     return new Promise((resolve,reject)=>{
//       this.http.patch(this.requestUrl+'users/'+userId,fieldToBeUpdated,{ headers: { Authorization: `Bearer `+accessToken }})
//       .subscribe((newUser)=>{
//         console.log("updated userField ",newUser);
//         resolve(newUser);
//       },err=>{
//         console.log("error in updating the userField ",err);
//         reject(err) ;
//       })
//     })
//   }
// }
