(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            iFarms\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div text-left>\n        <ion-row>\n            <ion-col size=\"8\">\n                <p class=\"name\">{{ 'Home.name' | translate }}</p>\n            </ion-col>\n            <ion-col size=\"4\">\n                    <ion-icon name=\"options\"></ion-icon>\n                <p class=\"element\">{{ 'Home.View-all' | translate }}</p>\n            </ion-col>\n        </ion-row>\n    </div>\n    <ion-slides [options]=\"sliderConfig\" #slides>\n        <ion-slide>\n            <a (click)=\"goto('Farm')\">\n                <ion-card class=\"main-card\">\n                    <img class=\"farm-img\" src=\"../../assets/farm.jpeg\" />\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <p class=\"value card-title\">Farm</p>\n                            <p class=\"value card-subtitle\">Rangan's Farm</p>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n            </a>\n        </ion-slide>\n        <ion-slide>\n            <a (click)=\"goto('IFFCO')\">\n                <ion-card class=\"main-card\">\n                    <img class=\"iffco-img\" src=\"../../assets/iffcoo-logo.png\" />\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <p class=\"value card-title\">Cooperative</p>\n                            <p class=\"value card-subtitle\">IFFCO</p>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n            </a>\n        </ion-slide>\n        <ion-slide>\n            <a (click)=\"goto('Aavin')\">\n                <ion-card class=\"main-card\">\n                    <img class=\"aavin-img\" src=\"../../assets/aavin.jpeg\" />\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <p class=\"value card-title\">Milk</p>\n                            <p class=\"value card-subtitle\">Aavin</p>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n            </a>\n        </ion-slide>\n    </ion-slides>\n    <div text-left>\n        <ion-row>\n            <ion-col size=\"8\">\n                <p class=\"name\">{{ 'Home.Available-products' | translate }}</p>\n            </ion-col>\n            <ion-col size=\"4\">\n                <ion-icon name=\"options\"></ion-icon>\n                <p class=\"element\">{{ 'Home.View-all' | translate }}</p>\n            </ion-col>\n        </ion-row>\n    </div>\n    <ion-slides [options]=\"sliderConfig\" #slides>\n        <ion-slide *ngFor=\"let item of product\">\n            <a (click)=\"orderProduct(item)\">\n                <ion-card>\n                    <img src=\"{{item.imageUrl}}\" />\n                    <ion-row>\n                        <ion-col size=\"6\">\n                            <p class=\"value card-title\">{{item.category}}</p>\n                            <p class=\"value card-subtitle\">{{item.name}}</p>\n                        </ion-col>\n                        <ion-col size=\"6\">\n                            <p class=\"value rate\">Rs.{{item.price}}</p>\n                            <p class=\"value per\">{{item.quantity}} per kg</p>\n\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n            </a>\n        </ion-slide>\n    </ion-slides>\n    <div text-left>\n        <ion-row>\n            <ion-col size=\"8\">\n                <p class=\"name\">{{ 'Home.Order-Now' | translate }}</p>\n            </ion-col>\n            <ion-col size=\"4\">\n                <ion-icon name=\"options\"></ion-icon>\n                <p class=\"element\">{{ 'Home.View-all' | translate }}</p>\n            </ion-col>\n        </ion-row>\n    </div>\n    <ion-slides [options]=\"sliderConfig\" #slides>\n        <ion-slide>\n            <ion-card>\n                <img src=\"../../assets/mango.jpg\" />\n                <ion-row>\n                    <ion-col size=\"6\">\n                        <p class=\"value card-title\">Fruits</p>\n                        <p class=\"value card-subtitle\">Mango</p>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <p class=\"value rate1\">Rs.120.0</p>\n                        <p class=\"value per1\">per kg</p>\n                    </ion-col>\n                </ion-row>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card>\n                <img src=\"../../assets/potato.jpg\" />\n                <ion-row>\n                    <ion-col size=\"6\">\n                        <p class=\"value card-title\">Vegetables</p>\n                        <p class=\"value card-subtitle\">Potato</p>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <p class=\"value rate1\">Rs.520.0</p>\n                        <p class=\"value per1\">per kg</p>\n                    </ion-col>\n                </ion-row>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card>\n                <img src=\"../../assets/blueberries.jpg\" />\n                <ion-row>\n                    <ion-col size=\"6\">\n                        <p class=\"value card-title\">Fruits</p>\n                        <p class=\"value card-subtitle\">Blueberries</p>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <p class=\"value rate1\">Rs.320.0</p>\n                        <p class=\"value per1\">per kg</p>\n                    </ion-col>\n                </ion-row>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HttpLoaderFactory, HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");










// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](httpClient);
}
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                }
            })
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card img {\n  height: 25vh !important;\n}\n\n.card-title {\n  margin-top: -4px;\n  font-size: 16px;\n}\n\n.card-subtitle {\n  margin-top: -27px;\n  margin-bottom: -4px;\n  font-size: 18px;\n  font-weight: w600;\n  color: black;\n  font-weight: bold;\n}\n\n.name {\n  color: black;\n  font-size: 20px;\n}\n\n.iffco-img {\n  width: 350px;\n  height: 200px !important;\n  background: #00853cbd;\n}\n\n.farm-img {\n  width: 350px;\n  height: 200px !important;\n}\n\np {\n  text-align: left;\n  padding: 10px;\n  margin-top: -1px;\n  font-size: 12px;\n}\n\nion-icon {\n  color: #00853c;\n  margin-top: -5px;\n  margin-bottom: -14px;\n}\n\n.element {\n  color: orange;\n  margin-top: -19px;\n  margin-right: -2px;\n  margin-left: -2px;\n  text-align: right;\n  font-size: 16px;\n}\n\n.rate {\n  text-align: right;\n  margin-right: 21px;\n  margin-top: 1px;\n  font-weight: w600;\n  font-size: 15px;\n}\n\n.rate1 {\n  text-align: right;\n  margin-right: 16px;\n  margin-top: 1px;\n  font-weight: w600;\n  font-size: 15px;\n}\n\n.per {\n  text-align: right;\n  margin-right: 6px;\n  margin-top: -28px;\n  margin-bottom: -12px;\n  font-weight: w600;\n  font-size: 15px;\n}\n\n.per1 {\n  text-align: right;\n  margin-right: 33px;\n  margin-top: -28px;\n  margin-bottom: -12px;\n  font-weight: w600;\n  font-size: 15px;\n}\n\nion-tab-button, ion-tab-bar {\n  background-color: #00853c;\n}\n\n.swiper-container {\n  margin: 0 -38px;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhaGl0aC9Eb2N1bWVudHMvd29yay9uYXR0dXZhLWFwcC9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx1QkFBQTtBQ0FSOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUNESjs7QURHQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNHSjs7QURBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0lKOztBRERBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLHlCQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDI1dmggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNhcmQtc3VidGl0bGUge1xuICAgIG1hcmdpbi10b3A6IC0yN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IC00cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiB3NjAwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm5hbWUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pZmZjby1pbWd7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NTNjYmQ7XG59XG4uZmFybS1pbWd7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMjAwcHggIWltcG9ydGFudDsgIFxufVxuXG5wIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBmb250LXNpemU6IDEycHhcbn1cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwODUzYztcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xNHB4O1xufVxuLmVsZW1lbnQge1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgbWFyZ2luLXRvcDogLTE5cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5yYXRlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIxcHg7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiB3NjAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnJhdGUxIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiB3NjAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5wZXIge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIG1hcmdpbi10b3A6IC0yOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiB3NjAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnBlcjEge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMzNweDtcbiAgICBtYXJnaW4tdG9wOiAtMjhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTJweDtcbiAgICBmb250LXdlaWdodDogdzYwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5pb24tdGFiLWJ1dHRvbixpb24tdGFiLWJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDg1M2M7XG59XG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIC0zOHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIFxufVxuIiwiaW9uLWNhcmQgaW1nIHtcbiAgaGVpZ2h0OiAyNXZoICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogLTRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IC0yN3B4O1xuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiB3NjAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmFtZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaWZmY28taW1nIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMwMDg1M2NiZDtcbn1cblxuLmZhcm0taW1nIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDg1M2M7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIG1hcmdpbi1ib3R0b206IC0xNHB4O1xufVxuXG4uZWxlbWVudCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIG1hcmdpbi10b3A6IC0xOXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0ycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucmF0ZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDIxcHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgZm9udC13ZWlnaHQ6IHc2MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnJhdGUxIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBmb250LXdlaWdodDogdzYwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ucGVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBtYXJnaW4tdG9wOiAtMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogLTEycHg7XG4gIGZvbnQtd2VpZ2h0OiB3NjAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5wZXIxIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMzNweDtcbiAgbWFyZ2luLXRvcDogLTI4cHg7XG4gIG1hcmdpbi1ib3R0b206IC0xMnB4O1xuICBmb250LXdlaWdodDogdzYwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5pb24tdGFiLWJ1dHRvbiwgaW9uLXRhYi1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NTNjO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCAtMzhweDtcbiAgd2lkdGg6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_curd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/curd.service */ "./src/app/services/curd.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API;
let HomePage = class HomePage {
    constructor(router, translate, userService, services) {
        this.router = router;
        this.translate = translate;
        this.userService = userService;
        this.services = services;
        this.product = [];
        this.languages = [];
        this.sliderConfig = {
            slidesPerView: 1.3,
            spaceBetween: 1,
            centeredSlides: true,
        };
    }
    ngOnInit() {
        this.getAllProducts();
        this.userService.getUser().then(res => {
            res.forEach(user => {
                this.selectedLag = user.languages;
                this.getAppLag(this.selectedLag);
            });
        });
    }
    getAllProducts() {
        let url = API_URL + 'products';
        this.services.getAllProducts(url).subscribe((res) => {
            if (res != null) {
                this.product = res;
                console.log("print value", this.product);
            }
        });
    }
    goto(value) {
        this.router.navigate(['preview-farm', { "page": value }]);
    }
    getAppLag(language) {
        this.translate.use(language);
    }
    orderProduct(data) {
        var details = JSON.stringify(data);
        this.router.navigate(['order', { "data": details }]);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] },
    { type: _services_curd_service__WEBPACK_IMPORTED_MODULE_5__["CurdService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HomePage.prototype, "slides", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"], _services_curd_service__WEBPACK_IMPORTED_MODULE_5__["CurdService"]])
], HomePage);



/***/ }),

/***/ "./src/app/services/state.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/state.service.ts ***!
  \*******************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_state_state_user_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-state/state/user.state */ "./src/app/app-state/state/user.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let StateService = class StateService {
    constructor() {
        this.setUser();
    }
    setUser() {
        this.user$.subscribe(res => {
            let userDetails = [];
            userDetails = res;
            if (userDetails.userState.length > 0) {
                localStorage.setItem('user', JSON.stringify(userDetails.userState));
            }
        });
    }
    getUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let user = localStorage.getItem('user');
            return JSON.parse(user);
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_app_state_state_user_state__WEBPACK_IMPORTED_MODULE_2__["AppState"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
], StateService.prototype, "user$", void 0);
StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StateService);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map