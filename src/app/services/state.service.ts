import { Injectable } from '@angular/core';
import { AppState } from '../app-state/state/user.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class StateService {
  @Select( AppState ) user$ : Observable<any>;
  constructor() { 
    this.setUser()
  }

  setUser() {
    this.user$.subscribe(res => {
      let userDetails : any = [];
      userDetails = res;
      if(userDetails.userState.length > 0) {
        localStorage.setItem('user', JSON.stringify(userDetails.userState));
      }
    })
  }

  async getUser() {
    let user = localStorage.getItem('user');
    return JSON.parse(user); 
  }
}
