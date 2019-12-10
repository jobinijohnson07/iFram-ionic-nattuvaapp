import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import 'firebase/firestore';
declare var require: any;
let config   = require('../config.json');

@Injectable()
export class AuthService {
  key: string;
 
  constructor(
              private router:Router,
              public angularfireauth:AngularFireAuth,
              ) { localStorage.setItem(this.key,'false');  }
  requestUrl:string = config.cloudFunctionUrl;

  //returns logged in user from firebaseAuth
  //Note that this is not the user stored in firestore it is the user in firebase auth and doesnt contain entire details.
  getLoggedInUser()
  {
    return new Promise((resolve,reject)=>{
      this.angularfireauth.authState
        .subscribe(user=>{
            return resolve(user)
        },err => {
            return reject(err);
        })
    })
  } 
  //gets access token of currently logged in user
  async getAccessToken()
  {
    return firebase.auth().currentUser.getIdToken()
  }
 
  // function for logging out a user.
  logOut()
  {
    console.log("inside logout service")
    this.angularfireauth.auth.signOut()
      .then(()=>{
        console.log("inside promise ")
        localStorage.clear();
        this.router.navigateByUrl('/login');
      })
  }

  setUserLoggedIn(){
    this.key = 'isLoggedIn';
    localStorage.setItem(this.key,'true');
    //this.isloggedIn = true;
  }

  isUserLoggedIn(): any {
		return localStorage.getItem(this.key);
	}
}
