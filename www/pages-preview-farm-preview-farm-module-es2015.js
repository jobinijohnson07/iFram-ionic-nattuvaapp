(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-preview-farm-preview-farm-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/preview-farm/preview-farm.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/preview-farm/preview-farm.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n    <ion-title>iFarms</ion-title>\n    <!-- <p class=\"button\"><ion-icon name=\"arrow-back\"></ion-icon></p> -->\n    <p class=\"button\"><ion-icon name=\"arrow-back\" (click)='openChat()'></ion-icon></p> \n    </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"pageName == 'Farm'\">\n    <ion-card >\n        <img src=\"../../assets/farm.jpeg\" />\n        <div class=\"card-title\">\n            <P>Rangan's Farm</P>\n        </div>\n        <div class=\"card-subtitle\">\n            <h5>Farm</h5>\n        </div>\n        <ion-col size=\"4\">\n            <ion-row>\n                <ion-col size=\"3\">\n                    <ion-icon name=\"pin\" style=\"zoom:1.8;\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"9\">\n                    <p class=\"name\">Shahapur,Maharastra</p>\n                </ion-col>\n            </ion-row>\n            <p class=\"title\">Description</p><br>\n            <p class=\"para\">A large scale fertiliser cooperative federation based in india which is registered as a Multistate cooperative Society.</p>\n        </ion-col>\n    </ion-card>\n    <p class=\"list\">Products sold by it:</p>\n    <ion-slides [options]=\"sliderConfig\" #slides>\n        <ion-slide>\n            <a (click)=\"goto('wheat')\">\n                <ion-card>\n                    <img src=\"../../assets/wheat.png\" />\n                    <p class=\"products\">Crop</p>\n                    <p class=\"fertiliser\">Wheat</p>\n                    <p class=\"rate\">Rs.320.0</p>\n                    <p class=\"per\">per kg</p>\n                </ion-card>\n            </a>\n        </ion-slide>\n        <ion-slide>\n                <a (click)=\"goto('corn')\">\n            <ion-card>\n                <p class=\"image\"><img src=\"../../assets/cornss.jpeg\" /></p>\n                <p class=\"products1\">Crop</p>\n                <p class=\"fertiliser\">Corn</p>  \n                <p class=\"rate\">Rs.220.0</p>\n                <p class=\"per\">per kg</p>\n            </ion-card>\n            </a>\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n\n<ion-content *ngIf = \"pageName == 'Aavin'\">\n    <ion-card >\n        <img class=\"aavin-img\" src=\"../../assets/aavin.jpeg\" />\n        <div class=\"card-title\">\n            <P>Aavin</P>\n        </div>\n        <div class=\"card-subtitle\">\n            <h5>Cooperative</h5>\n        </div>\n        <ion-col size=\"4\">\n            <ion-row>\n                <ion-col size=\"3\">\n                    <ion-icon name=\"pin\" style=\"zoom:1.8;\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"9\">\n                    <p class=\"name\">Saket place, New Delhi</p>\n                </ion-col>\n            </ion-row>\n            <p class=\"title\">Description</p><br>\n            <p class=\"para\">A large scale fertiliser cooperative federation based in india which is registered as a Multistate cooperative Society.</p>\n        </ion-col>\n    </ion-card>\n    <p class=\"list\">Farms part of it:</p>\n    <ion-slides [options]=\"sliderConfig\" #slides>\n        <ion-slide>\n            <a (click)=\"goto()\">\n                <ion-card>\n                    <p class=\"image\"><img src=\"../../assets/kawai.jpg\" /></p>\n                    <p class=\"crops\">farm</p>\n                    <p class=\"coop\">Kawai Farm</p>\n                </ion-card>\n            </a>\n        </ion-slide>\n        <ion-slide>\n                <a (click)=\"goto('delight')\">\n                   <ion-card>\n                     <p class=\"image\"><img src=\"../../assets/delight.jpeg\" /></p>\n                     <p class=\"crops\">farm</p>\n                     <p class=\"coop\">Delight Farm</p>\n                     \n                  </ion-card>\n               </a>\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n       \n<ion-content *ngIf = \"pageName == 'IFFCO'\">\n    <ion-card >\n            <img class=\"iffco-img\" src=\"../../assets/iffcoo-logo.png\" />\n        <div class=\"card-title\">\n            <P>Indian Farmers Fertiliser Coop. (IFFCO)</P>\n        </div>\n        <div class=\"card-subtitle\">\n            <h5>Cooperative</h5>\n        </div>\n        <ion-col size=\"4\">\n            <ion-row>\n                <ion-col size=\"3\">\n                    <ion-icon name=\"pin\" style=\"zoom:1.8;\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"9\">\n                    <p class=\"name\">Saket place, New Delhi</p>\n                </ion-col>\n            </ion-row>\n            <p class=\"title\">Description</p><br>\n            <p class=\"para\">A large scale fertiliser cooperative federation based in india which is registered as a Multistate cooperative Society.</p>\n        </ion-col>\n    </ion-card>\n    <p class=\"list\">Farms part of it:</p>\n    <ion-slides [options]=\"sliderConfig\" #slides>\n        <ion-slide>\n            <a (click)=\"goto()\">\n                <ion-card>\n                    <p class=\"image\"><img src=\"../../assets/kawai.jpg\" /></p>\n                    <p class=\"crops\">farm</p>\n                    <p class=\"coop\">Kawai Farm</p>\n                    \n                </ion-card>\n            </a>\n        </ion-slide>\n        <ion-slide>\n                <a (click)=\"goto('delight')\">\n                   <ion-card>\n                     <p class=\"image\"><img src=\"../../assets/delight.jpeg\" /></p>\n                     <p class=\"crops\">farm</p>\n                     <p class=\"coop\">Delight Farm</p>\n                     \n                  </ion-card>\n               </a>\n        </ion-slide>\n        <ion-slide>\n                <a (click)=\"goto()\"> \n            <ion-card>\n                <p class=\"image\"><img src=\"../../assets/blueridge.jpeg\" /></p>\n                <p class=\"crops\">farm</p>\n                <p class=\"coop\">BlueRidge Farm</p>\n                \n            </ion-card>\n            </a>\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n\n<ion-content *ngIf=\"pageName == 'item'\">\n        <form name=\"form\" (ngSubmit)=\"addToCart()\" #f=\"ngForm\">\n        <ion-card>\n           \n            <img class=\" \"  src=\"{{item.imageUrl}}\" /> \n            <div class=\"card-title\">\n                <P>{{item.name}}</P>\n            </div>\n            <div class=\"card-subtitle\">\n                <h5>{{item.category}}</h5>\n            </div>\n    \n            <ion-row>\n                <ion-col size=\"8\">\n                    <p class=\"value kilo1\">{{item.quantity}}</p>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <p class=\"value amount1\">Rs.{{item.price}}</p>\n                    <p class=\"value per1\">per kg</p>\n                </ion-col>\n            </ion-row>\n    \n            <ion-row>\n                <ion-col size=\"12\">\n                    <p class=\"value title1\">Seller</p>\n                    <p class=\"value person1\">Sasi Kumar</p>\n                    <p class=\"value place1\">Coimbatore,TN</p>\n                    <p class=\"value rating1\">\n                        <ion-icon class=\"value icon1\" name=\"star\"></ion-icon>4.3 rated</p>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <p class=\"value product1\">Quantity</p>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <!-- <p class =\"value\">kgs: <input type=\"text\" class=\"value kg1\" placeholder=\"\" name=\"unit\"> </p> -->\n                    <p class=\"value kg1\">kgs:</p>\n                </ion-col>\n            </ion-row>\n    \n            <ion-row>\n                <ion-col size=\"6\">\n                    <p class=\" value contract1\">Forward Contract</p>\n                    <p class=\" value order1\">Delivery by,</p>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <p class=\"value delivery1\">Sep 18,2018</p>\n                </ion-col>\n            </ion-row>\n    \n            <ion-row>\n                <ion-col size=\"4\">\n                    <p class=\" value icon2\">\n                            <ion-icon (click)=\"addToCart()\" name=\"cart\"></ion-icon> \n                    </p>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-button shape=\"round\"(click)=\"addToCart()\">ORDER NOW</ion-button>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <p class=\"value icon3\">\n                        <ion-icon name=\"heart-empty\"></ion-icon>\n                    </p>\n                </ion-col>\n            </ion-row>\n        </ion-card>\n        </form>\n    </ion-content>\n    "

/***/ }),

/***/ "./src/app/pages/preview-farm/preview-farm.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/preview-farm/preview-farm.module.ts ***!
  \***********************************************************/
/*! exports provided: PreviewFarmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewFarmPageModule", function() { return PreviewFarmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _preview_farm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview-farm.page */ "./src/app/pages/preview-farm/preview-farm.page.ts");







const routes = [
    {
        path: '',
        component: _preview_farm_page__WEBPACK_IMPORTED_MODULE_6__["PreviewFarmPage"]
    }
];
let PreviewFarmPageModule = class PreviewFarmPageModule {
};
PreviewFarmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_preview_farm_page__WEBPACK_IMPORTED_MODULE_6__["PreviewFarmPage"]]
    })
], PreviewFarmPageModule);



/***/ }),

/***/ "./src/app/pages/preview-farm/preview-farm.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/preview-farm/preview-farm.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  padding: 10px;\n  color: black;\n  font-size: 18px;\n  margin-top: -5px;\n}\n\nh5 {\n  font-size: 13px;\n  margin-top: -35px;\n  padding: 10px;\n  color: grey;\n}\n\nion-icon {\n  margin-top: -33px;\n  padding: 10px;\n}\n\n.button {\n  margin-left: -16px;\n  margin-top: -10px;\n  margin-bottom: -40px;\n  color: white;\n  font-size: 27px;\n}\n\n.name {\n  text-align: left;\n  margin-top: -35px;\n  margin-left: -55px;\n  font-size: 13px;\n  color: grey;\n}\n\n.title {\n  padding: 10px;\n  font-size: 15px;\n  margin-top: -30px;\n  font-weight: 500px;\n  color: black;\n}\n\n.iffco-img {\n  width: 350px;\n  height: 200px !important;\n  background: #00853cbd;\n}\n\n.para {\n  padding: 10px;\n  font-size: 13px;\n  margin-top: -45px;\n  margin-bottom: -21px;\n  font-weight: 320;\n  color: grey;\n}\n\n.list {\n  font-size: 18px;\n  font-weight: 545;\n  margin-bottom: -10px;\n  color: black;\n}\n\n.products {\n  padding: 10px;\n  text-align: left;\n  margin-bottom: -3px;\n  font-size: 13px;\n  color: grey;\n}\n\n.coop {\n  margin-top: -14px;\n  margin-bottom: -5px;\n  font-size: 18px;\n  font-weight: w600;\n  color: black;\n  font-weight: bold;\n}\n\n.crops {\n  font-size: 16px;\n  color: grey;\n  margin-top: -31px;\n  margin-bottom: 2px;\n}\n\n.products1 {\n  padding: 10px;\n  text-align: left;\n  margin-bottom: -2px;\n  margin-top: -34px;\n  font-size: 13px;\n  color: grey;\n}\n\n.fertiliser {\n  padding: 10px;\n  text-align: center;\n  margin-top: -18px;\n  margin-bottom: -3px;\n  margin-left: -184px;\n  font-size: 18px;\n  font-weight: 550;\n  color: black;\n}\n\n.farm {\n  padding: 10px;\n  text-align: center;\n  margin-top: -34px;\n  margin-bottom: -3px;\n  margin-left: -197px;\n  font-size: 15px;\n  font-weight: 550;\n  color: black;\n}\n\n.rate {\n  text-align: center;\n  margin-top: -49px;\n  margin-right: -150px;\n  font-size: 12px;\n  color: grey;\n}\n\n.per {\n  text-align: center;\n  margin-top: -32px;\n  margin-right: -150px;\n  margin-bottom: -6px;\n  font-size: 12px;\n  color: grey;\n}\n\np {\n  padding: 10px;\n  text-align: left;\n  margin-top: -8px;\n  font-size: 17px;\n  font-weight: 550;\n  color: black;\n}\n\nh5 {\n  font-size: 13px;\n  margin-top: -41px;\n  padding: 10px;\n  color: grey;\n}\n\n.kilo1 {\n  margin-top: -61px;\n  text-align: right;\n  margin-right: -45px;\n  font-size: 16px;\n  color: #06668b;\n}\n\n.amount1 {\n  margin-right: -8px;\n  margin-top: -62px;\n  text-align: right;\n  font-size: 17px;\n  color: orange;\n}\n\n.per1 {\n  margin-right: 15px;\n  text-align: right;\n  margin-top: -38px;\n  font-size: 13px;\n  color: orange;\n}\n\n.title1 {\n  font-size: 15px;\n  padding: 5px;\n  margin-top: -22px;\n  color: black;\n}\n\n.person1 {\n  font-size: 13px;\n  padding: 5px;\n  margin-top: -22px;\n  color: grey;\n}\n\n.place1 {\n  font-size: 12px;\n  padding: 5px;\n  margin-top: -20px;\n  color: grey;\n}\n\n.rating1 {\n  font-size: 13px;\n  margin-top: -28px;\n  color: orange;\n  margin-bottom: 3px;\n}\n\n.product1 {\n  padding: 10px;\n  font-size: 15px;\n  margin-top: -23px;\n  color: black;\n}\n\n.kg1 {\n  font-size: 15px;\n  margin-top: -24px;\n  color: grey;\n}\n\n.contract1 {\n  padding: 10px;\n  font-size: 14px;\n  margin-top: -26px;\n  color: black;\n}\n\n.order1 {\n  padding: 10px;\n  font-size: 13px;\n  margin-top: -30px;\n  color: grey;\n}\n\n.delivery1 {\n  padding: 10px;\n  font-size: 13px;\n  text-align: left;\n  margin-left: -91px;\n  color: orange;\n  margin-top: -5px;\n}\n\n.icon2 {\n  font-size: 31px;\n  margin-top: -30px;\n  margin-bottom: -65px;\n  color: orange;\n}\n\n.icon1 {\n  padding: -3px;\n  font-size: 17px;\n  margin-top: -13px;\n  color: #053305;\n}\n\n.icon3 {\n  font-size: 27px;\n  margin-top: -23px;\n  margin-bottom: -8px;\n  text-align: right;\n  color: #da0c95;\n}\n\n.submit {\n  text-align: center;\n  color: black;\n}\n\nion-button {\n  margin-top: -20px;\n  margin-left: -20px;\n  text-align: left;\n  border-radius: 17px;\n  background-color: #076907;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhaGl0aC9Eb2N1bWVudHMvd29yay9uYXR0dXZhLWFwcC9zcmMvYXBwL3BhZ2VzL3ByZXZpZXctZmFybS9wcmV2aWV3LWZhcm0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcmV2aWV3LWZhcm0vcHJldmlldy1mYXJtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBRUUsaUJBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FKOztBRHVCRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDcEJKOztBRHVCRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNwQko7O0FEc0JFO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUNuQko7O0FEc0JFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDbkJKOztBRHNCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ25CSjs7QURzQkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDbkJKOztBRHNCRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNuQko7O0FEcUJFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDbEJKOztBRHFCRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ2xCSjs7QURxQkU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDbEJKOztBRHFCRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNsQko7O0FEd0JFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNyQko7O0FEd0JFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ3JCSjs7QUQwQkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUN2Qko7O0FEMEJFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUN2Qko7O0FEMEJFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUN2Qko7O0FEMEJFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUN2Qko7O0FEMEJFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUN2Qko7O0FEMEJFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUN2Qko7O0FEMEJFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUN2Qko7O0FEMEJFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUN2Qko7O0FEMEJFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDdkJKOztBRDBCRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDdkJKOztBRDBCRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUN2Qko7O0FEMEJFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUN2Qko7O0FEMEJFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUN2Qko7O0FEMEJFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDdkJKOztBRDBCRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQ3ZCSjs7QUQwQkU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ3ZCSjs7QUQwQkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ3ZCSjs7QUQwQkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUN2Qko7O0FEMkJFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ3hCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXZpZXctZmFybS9wcmV2aWV3LWZhcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG4gIH1cbiAgXG4gIGg1IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogZ3JleVxuICB9XG4gIFxuICBpb24taWNvbiB7XG4gICAgLy9jb2xvcjogZ29sZDtcbiAgICBtYXJnaW4tdG9wOiAtMzNweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIFxuICAuYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgfVxuICAvLyBpb24tY2FyZCB7XG4gIC8vICAgICBpbWcge1xuICAvLyAgICAgICAgIGhlaWdodDogMjV2aCAhaW1wb3J0YW50O1xuICAvLyAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIC8vICAgICB9XG4gIC8vICAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgLy8gICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIC8vICAgICAgICAgaW9uLWNhcmQtdGl0bGUge1xuICAvLyAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMS4zcmVtICFpbXBvcnRhbnQ7XG4gIC8vICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgLy8gICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjNyZW0gIWltcG9ydGFudDtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vIH1cbiAgXG4gIC8vIC5pZmZjbyB7XG4gIC8vICAgbWF4LXdpZHRoOiAxMDAlO1xuICAvLyAgIGJvcmRlcjogMDtcbiAgLy8gICBtYXJnaW4tbGVmdDogNTlweDtcbiAgLy8gICBtYXJnaW4tYm90dG9tOiAtMzFweDtcbiAgLy8gfVxuICAubmFtZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAtMzVweDtcbiAgICBtYXJnaW4tbGVmdDogLTU1cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiBncmV5XG4gIH1cbiAgXG4gIC50aXRsZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAuaWZmY28taW1ne1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogIzAwODUzY2JkO1xufVxuICBcbiAgLnBhcmEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi10b3A6IC00NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0yMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMjA7XG4gICAgY29sb3I6IGdyZXlcbiAgfVxuICBcbiAgLmxpc3Qge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTQ1O1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLnByb2R1Y3RzIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogLTNweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IGdyZXlcbiAgfVxuICBcbiAgLmNvb3Age1xuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiB3NjAwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuY3JvcHMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBtYXJnaW4tdG9wOiAtMzFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG5cbiAgfVxuICAucHJvZHVjdHMxIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgICBtYXJnaW4tdG9wOiAtMzRweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IGdyZXk7XG4gIH1cbiAgXG4gIC5mZXJ0aWxpc2VyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAtMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTg0cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICAuZmFybSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTM0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTNweDtcbiAgICBtYXJnaW4tbGVmdDogLTE5N3B4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTUwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgXG4gIFxuICBcbiAgLnJhdGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAtNDlweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6Z3JleVxuICB9XG4gIFxuICAucGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTMycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTZweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6Z3JleVxuICB9XG4gIFxuICBcbiAgXG4gIHAge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogNTUwO1xuICAgIGNvbG9yOiBibGFja1xuICB9XG4gIFxuICBoNSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi10b3A6IC00MXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6IGdyZXlcbiAgfVxuICBcbiAgLmtpbG8xe1xuICAgIG1hcmdpbi10b3A6IC02MXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogLTQ1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMDY2NjhiO1xuICB9XG4gIFxuICAuYW1vdW50MXtcbiAgICBtYXJnaW4tcmlnaHQ6IC04cHg7XG4gICAgbWFyZ2luLXRvcDogLTYycHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gIH1cbiAgXG4gIC5wZXIxe1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAtMzhweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IG9yYW5nZVxuICB9XG4gIFxuICAudGl0bGUxe1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogLTIycHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICAucGVyc29uMXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi10b3A6IC0yMnB4O1xuICAgIGNvbG9yOiBncmV5O1xuICB9XG4gIFxuICAucGxhY2Uxe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgY29sb3I6IGdyZXk7XG4gIH1cbiAgXG4gIC5yYXRpbmcxIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLXRvcDogLTI4cHg7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIH1cbiAgXG4gIC5wcm9kdWN0MSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogLTIzcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICAua2cxIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogLTI0cHg7XG4gICAgY29sb3I6IGdyZXk7XG4gIH1cbiAgXG4gIC5jb250cmFjdDEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IC0yNnB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLm9yZGVyMSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgY29sb3I6IGdyZXk7XG4gIH1cbiAgXG4gIC5kZWxpdmVyeTEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC05MXB4O1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgfVxuICBcbiAgLmljb24yIHtcbiAgICBmb250LXNpemU6IDMxcHg7XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTY1cHg7XG4gICAgY29sb3I6IG9yYW5nZVxuICB9XG4gIFxuICAuaWNvbjEge1xuICAgIHBhZGRpbmc6IC0zcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIG1hcmdpbi10b3A6IC0xM3B4O1xuICAgIGNvbG9yOiAjMDUzMzA1O1xuICB9XG4gIFxuICAuaWNvbjMge1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICBtYXJnaW4tdG9wOiAtMjNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiAjZGEwYzk1O1xuICB9XG4gIFxuICAuc3VibWl0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrXG4gIH1cbiAgXG4gIFxuICBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCAxMDUsIDcpO1xuICB9XG4gIFxuICBcbiAgIiwicCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogLTM1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiBncmV5O1xufVxuXG5pb24taWNvbiB7XG4gIG1hcmdpbi10b3A6IC0zM3B4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyN3B4O1xufVxuXG4ubmFtZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IC0zNXB4O1xuICBtYXJnaW4tbGVmdDogLTU1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi50aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaWZmY28taW1nIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMwMDg1M2NiZDtcbn1cblxuLnBhcmEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IC00NXB4O1xuICBtYXJnaW4tYm90dG9tOiAtMjFweDtcbiAgZm9udC13ZWlnaHQ6IDMyMDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5saXN0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTQ1O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucHJvZHVjdHMge1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAtM3B4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uY29vcCB7XG4gIG1hcmdpbi10b3A6IC0xNHB4O1xuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiB3NjAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY3JvcHMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiBncmV5O1xuICBtYXJnaW4tdG9wOiAtMzFweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4ucHJvZHVjdHMxIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgbWFyZ2luLXRvcDogLTM0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5mZXJ0aWxpc2VyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtMThweDtcbiAgbWFyZ2luLWJvdHRvbTogLTNweDtcbiAgbWFyZ2luLWxlZnQ6IC0xODRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTUwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5mYXJtIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtMzRweDtcbiAgbWFyZ2luLWJvdHRvbTogLTNweDtcbiAgbWFyZ2luLWxlZnQ6IC0xOTdweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTUwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5yYXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtNDlweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTUwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5wZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC0zMnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JleTtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogLTQxcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4ua2lsbzEge1xuICBtYXJnaW4tdG9wOiAtNjFweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogLTQ1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwNjY2OGI7XG59XG5cbi5hbW91bnQxIHtcbiAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xuICBtYXJnaW4tdG9wOiAtNjJweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnBlcjEge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtMzhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4udGl0bGUxIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IC0yMnB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wZXJzb24xIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IC0yMnB4O1xuICBjb2xvcjogZ3JleTtcbn1cblxuLnBsYWNlMSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5yYXRpbmcxIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAtMjhweDtcbiAgY29sb3I6IG9yYW5nZTtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4ucHJvZHVjdDEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC0yM3B4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5rZzEge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICBjb2xvcjogZ3JleTtcbn1cblxuLmNvbnRyYWN0MSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogLTI2cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm9yZGVyMSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uZGVsaXZlcnkxIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogLTkxcHg7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5pY29uMiB7XG4gIGZvbnQtc2l6ZTogMzFweDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIG1hcmdpbi1ib3R0b206IC02NXB4O1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uaWNvbjEge1xuICBwYWRkaW5nOiAtM3B4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi10b3A6IC0xM3B4O1xuICBjb2xvcjogIzA1MzMwNTtcbn1cblxuLmljb24zIHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBtYXJnaW4tdG9wOiAtMjNweDtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjZGEwYzk1O1xufVxuXG4uc3VibWl0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc2OTA3O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/preview-farm/preview-farm.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/preview-farm/preview-farm.page.ts ***!
  \*********************************************************/
/*! exports provided: PreviewFarmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewFarmPage", function() { return PreviewFarmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_curd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/curd.service */ "./src/app/services/curd.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





const API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API;
let PreviewFarmPage = class PreviewFarmPage {
    constructor(router, route, services) {
        this.router = router;
        this.route = route;
        this.services = services;
        this.sliderConfig = {
            slidesPerView: 1.3,
            spaceBetween: 0,
            centeredSlides: true,
        };
        this.data = [];
        this.products = {};
        this.pageName = this.route.snapshot.paramMap.get('page');
    }
    ngOnInit() {
        this.addToCart();
    }
    addToCart() {
        let url = API_URL + 'products';
        this.products['imageUrl'] = this.imageBase;
        this.services.addToCart(url, this.products).subscribe((res) => {
            if (res != null) {
                this.data = res;
            }
        });
    }
    goto(value) {
        this.router.navigate(['preview-wheat', { "page": value }]);
    }
    openChat() {
        this.router.navigateByUrl('/home');
    }
};
PreviewFarmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_curd_service__WEBPACK_IMPORTED_MODULE_3__["CurdService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PreviewFarmPage.prototype, "slides", void 0);
PreviewFarmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preview-farm',
        template: __webpack_require__(/*! raw-loader!./preview-farm.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/preview-farm/preview-farm.page.html"),
        styles: [__webpack_require__(/*! ./preview-farm.page.scss */ "./src/app/pages/preview-farm/preview-farm.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_curd_service__WEBPACK_IMPORTED_MODULE_3__["CurdService"]])
], PreviewFarmPage);



/***/ })

}]);
//# sourceMappingURL=pages-preview-farm-preview-farm-module-es2015.js.map