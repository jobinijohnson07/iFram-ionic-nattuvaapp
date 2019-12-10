(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wishlist-wishlist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/wishlist/wishlist.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/wishlist/wishlist.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n           Wishlist\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngFor = \"let item of data\">\n        <ion-row>\n            <ion-col size=\"6\">\n                <img class=\" \"  src=\"{{item.imageUrl}}\" /> \n            </ion-col>\n            <!-- productId\":\"123\",,\"unit\":\"1\",\"\":\"2019-11-04\",\"isForwardContract\":\"no\",\"\":\"2155 -->\n            <ion-col size=\"6\">\n                <p class=\"value name\">{{item.category}}</p>\n                <p class=\"value fruit\">{{item.name}}</p>\n                <p class=\"value kgs\">{{item.quantity}}</p>\n                <p class=\"value product\">{{item.price}}</p>\n                <p class=\"value person\">{{item.sellerId}}</p>\n                <p class=\"value date\">{{item.deliveryDate}}</p>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n    <!-- <ion-card>\n        <ion-row>\n            <ion-col size=\"6\">\n                <img class=\"\" src=\"../../assets/mango.jpg\" alt=\"Card image cap\">\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-col size=\"6\">\n                    <p class=\"value name1\">Fruits</p>\n                    <p class=\"value fruit\">Mango</p>\n                    <p class=\"value kgs\">210.0 kgs</p>\n                    <p class=\"value product1\">Seller</p>\n                    <p class=\"value person\">Sahankar</p>\n                    <p class=\"value date\">Delivery by Sep1, 2019</p>\n                </ion-col>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n    <ion-card>\n        <ion-row>\n            <ion-col size=\"6\">\n                <img class=\"\" src=\"../../assets/banana.jpg\" alt=\"Card image cap\">\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-col size=\"6\">\n                    <p class=\"value name2\">Fruits</p>\n                    <p class=\"value fruit\">Bananas</p>\n                    <p class=\"value kgs\">210.0 kgs</p>\n                    <p class=\"value product\">Seller</p>\n                    <p class=\"value person\">Sahankar</p>\n                    <p class=\"value date\">Delivery by Sep1, 2019</p>\n                </ion-col>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n    <ion-card>\n        <ion-row>\n            <ion-col size=\"6\">\n                <img class=\"\" src=\" \" alt=\"Card image cap\">\n            </ion-col>\n            <ion-col size=\"6\">\n                <p class=\"value name3\">{{}}</p>\n                <p class=\"value fruit\">{{}}</p>\n                <p class=\"value kgs\">{{}}</p>\n                <p class=\"value product\">{{}}</p>\n                <p class=\"value person\">{{}}</p>\n                <p class=\"value date\">{{}}</p>\n            </ion-col>\n        </ion-row>\n    </ion-card> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.module.ts ***!
  \***************************************************/
/*! exports provided: WishlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist.page */ "./src/app/pages/wishlist/wishlist.page.ts");







const routes = [
    {
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]
    }
];
let WishlistPageModule = class WishlistPageModule {
};
WishlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]]
    })
], WishlistPageModule);



/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-width: 120%;\n  border: 0;\n}\n\n.sc-ion-card-md-s img {\n  display: block;\n  width: 108%;\n}\n\nimg[_ngcontent-cmu-c2] {\n  max-width: 104%;\n  border: 0;\n}\n\n.fruit {\n  margin-top: -20%;\n  margin-bottom: 1%;\n  padding: 10px;\n  text-align: left;\n  font-size: 15px;\n  color: black;\n  font-family: \"Montserrat\";\n}\n\n.name {\n  margin-top: -5%;\n  font-size: 13px;\n  padding: 10px;\n  color: grey;\n  font-family: \"Montserrat\";\n}\n\n.name1 {\n  margin-top: -17%;\n  font-size: 13px;\n  padding: 10px;\n  color: grey;\n  font-family: \"Montserrat\";\n}\n\n.name2 {\n  margin-top: -17%;\n  font-size: 13px;\n  padding: 10px;\n  color: grey;\n  font-family: \"Montserrat\";\n}\n\n.product {\n  margin-top: -37px;\n  font-size: 15px;\n  text-align: left;\n  padding: 10px;\n  color: black;\n  font-family: \"Montserrat\";\n}\n\n.product1 {\n  margin-top: -42px;\n  font-size: 15px;\n  text-align: left;\n  padding: 10px;\n  color: black;\n  font-family: \"Montserrat\";\n}\n\n.person {\n  margin-top: -33px;\n  margin-bottom: 1px;\n  font-size: 13px;\n  padding: 10px;\n  font-family: \"Montserrat\";\n}\n\n.kgs {\n  margin-top: -13%;\n  margin-bottom: 17%;\n  font-size: 13px;\n  padding: 10px;\n  font-family: \"Montserrat\";\n}\n\n.date {\n  font-size: 13px;\n  margin-bottom: -23px;\n  margin-top: -22px;\n  padding: 10px;\n  font-family: \"Montserrat\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhaGl0aC9Eb2N1bWVudHMvd29yay9uYXR0dXZhLWFwcC9zcmMvYXBwL3BhZ2VzL3dpc2hsaXN0L3dpc2hsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dpc2hsaXN0L3dpc2hsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgbWF4LXdpZHRoOiAxMjAlO1xuICAgIGJvcmRlcjogMDtcbn1cblxuLnNjLWlvbi1jYXJkLW1kLXMgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTA4JTtcbn1cblxuaW1nW19uZ2NvbnRlbnQtY211LWMyXSB7XG4gICAgbWF4LXdpZHRoOiAxMDQlO1xuICAgIGJvcmRlcjogMDtcbn1cblxuLmZydWl0IHtcbiAgICBtYXJnaW4tdG9wOiAtMjAlO1xuICAgIG1hcmdpbi1ib3R0b206IDElO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG59XG5cbi5uYW1lIHtcbiAgICBtYXJnaW4tdG9wOiAtNSU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jztcbn1cblxuLm5hbWUxIHtcbiAgICBtYXJnaW4tdG9wOiAtMTclO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG59XG5cbi5uYW1lMiB7XG4gICAgbWFyZ2luLXRvcDogLTE3JTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xufVxuXG4ucHJvZHVjdCB7XG4gICAgbWFyZ2luLXRvcDogLTM3cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jztcbn1cblxuLnByb2R1Y3QxIHtcbiAgICBtYXJnaW4tdG9wOiAtNDJweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xufVxuXG4ucGVyc29uIHtcbiAgICBtYXJnaW4tdG9wOiAtMzNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jztcbn1cblxuLmtncyB7XG4gICAgbWFyZ2luLXRvcDogLTEzJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNyU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jztcbn1cblxuLmRhdGUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMjNweDtcbiAgICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG59IiwiaW1nIHtcbiAgbWF4LXdpZHRoOiAxMjAlO1xuICBib3JkZXI6IDA7XG59XG5cbi5zYy1pb24tY2FyZC1tZC1zIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTA4JTtcbn1cblxuaW1nW19uZ2NvbnRlbnQtY211LWMyXSB7XG4gIG1heC13aWR0aDogMTA0JTtcbiAgYm9yZGVyOiAwO1xufVxuXG4uZnJ1aXQge1xuICBtYXJnaW4tdG9wOiAtMjAlO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbn1cblxuLm5hbWUge1xuICBtYXJnaW4tdG9wOiAtNSU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbn1cblxuLm5hbWUxIHtcbiAgbWFyZ2luLXRvcDogLTE3JTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xufVxuXG4ubmFtZTIge1xuICBtYXJnaW4tdG9wOiAtMTclO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG59XG5cbi5wcm9kdWN0IHtcbiAgbWFyZ2luLXRvcDogLTM3cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG59XG5cbi5wcm9kdWN0MSB7XG4gIG1hcmdpbi10b3A6IC00MnB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xufVxuXG4ucGVyc29uIHtcbiAgbWFyZ2luLXRvcDogLTMzcHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG59XG5cbi5rZ3Mge1xuICBtYXJnaW4tdG9wOiAtMTMlO1xuICBtYXJnaW4tYm90dG9tOiAxNyU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xufVxuXG4uZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogLTIzcHg7XG4gIG1hcmdpbi10b3A6IC0yMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.page.ts ***!
  \*************************************************/
/*! exports provided: WishlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPage", function() { return WishlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_curd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/curd.service */ "./src/app/services/curd.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
let WishlistPage = class WishlistPage {
    constructor(services) {
        this.services = services;
        this.data = [];
    }
    ngOnInit() {
        this.getAllProducts();
        this.getSoldProducts();
    }
    getAllProducts() {
        let url = API_URL + 'products';
        this.services.getAllProducts(url).subscribe((res) => {
            if (res != null) {
                this.data = res;
            }
        });
    }
    getSoldProducts() {
        let url = API_URL + 'products';
        this.services.getSoldProducts(url).subscribe((res) => {
            if (res != null) {
                this.product = res;
            }
        });
    }
};
WishlistPage.ctorParameters = () => [
    { type: _services_curd_service__WEBPACK_IMPORTED_MODULE_2__["CurdService"] }
];
WishlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wishlist',
        template: __webpack_require__(/*! raw-loader!./wishlist.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/wishlist/wishlist.page.html"),
        styles: [__webpack_require__(/*! ./wishlist.page.scss */ "./src/app/pages/wishlist/wishlist.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_curd_service__WEBPACK_IMPORTED_MODULE_2__["CurdService"]])
], WishlistPage);



/***/ })

}]);
//# sourceMappingURL=pages-wishlist-wishlist-module-es2015.js.map