import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CurdService {
  
  constructor(private http: HttpClient) { }

  
  getAllProducts(url) {
    let token = localStorage.getItem('token')
    const header = new HttpHeaders().set('Authorization','Bearer '+ token)
    return this.http.get<any>(url, {
      headers : header
    })
      .pipe(
        map(res => {
          res['data']
          return res;
        }),
        catchError(err => {
          throw new Error(err);
        })
      );
  }

  getCart(url) {
    let token = localStorage.getItem('token')
    const header = new HttpHeaders().set('Authorization','Bearer '+ token)
    return this.http.get<any>(url, {
      headers : header
    })
      .pipe(
        map(res => {
          res['data']
          return res;
        }),
        catchError(err => {
          throw new Error(err);
        })
      );
  }

  getSellerProducts(url) {
    let token = localStorage.getItem('token')
    const header = new HttpHeaders().set('Authorization','Bearer '+ token)
    return this.http.get<any>(url, {
      headers : header
    })
      .pipe(
        map(res => {
          res['data']
          return res;
        }),
        catchError(err => {
          throw new Error(err);
        })
      );
  }

  // addProduct(url,data) {
  //   debugger
  //   let token = localStorage.getItem('token')
  //   const header = new HttpHeaders().set('Authorization','Bearer '+ token)
  //   return this.http.post(url,data,
  //   {
  //     headers : header
  //   })
  //     .pipe(
  //       map(res => {
  //         res['data']
  //         return res;
  //       }),
  //       catchError(err => {
  //         throw new Error(err);
  //       })
  //     );
  // }
  addProduct(url,data): any {
  
    let token = localStorage.getItem('token')
    const header = new HttpHeaders().set('Authorization','Bearer '+ token)
      return new Promise((resolve, reject) => {
         this.http.post(url, data, {
          headers : header
         })
           .subscribe(res => {
             return resolve(res);
           }, (err) => {
             return reject(err);
           });
       }); 
   }
  
  addToCart(url,data) {
  
    let token = localStorage.getItem('token')
    const header = new HttpHeaders().set('Authorization','Bearer '+ token)
    return this.http.post(url,data,
    {
      headers : header
    })
      .pipe(
        map(res => {
          res['data']
          return res;
        }),
        catchError(err => {
          throw new Error(err);
        })
      );
  }
  
  getUserDetails(url) {
    let token = localStorage.getItem('token')
    const header = new HttpHeaders().set('Authorization','Bearer '+ token)
    return this.http.get<any>(url, {
      headers : header
    })
      .pipe(
        map(res => {
          res['data']
          return res;
        }),
        catchError(err => {
          throw new Error(err);
        })
      );
 }

 getSoldProducts(url) {
  let token = localStorage.getItem('token')
  const header = new HttpHeaders().set('Authorization','Bearer '+ token)
  return this.http.get<any>(url, {
    headers : header
  })
    .pipe(
      map(res => {
        res['data']
        return res;
      }),
      catchError(err => {
        throw new Error(err);
      })
    );
}

 




  
}










