(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-preview-delight-preview-delight-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/preview-delight/preview-delight.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/preview-delight/preview-delight.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>iFarms</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-content *ngIf=\"pageName == 'wheat'\">\n        <ion-card>\n            <img src=\"../../assets/wheat.png\" />\n            <div class=\"card-title\">\n                <P>Wheat</P>\n            </div>\n            <div class=\"card-subtitle\">\n                <h5>Crop</h5>\n            </div>\n    \n            <ion-row>\n                <ion-col size=\"8\">\n                    <p class=\"value kilo1\">80 kgs</p>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <p class=\"value amount1\">Rs. 32.0</p>\n                    <p class=\"value per1\">per kg</p>\n                </ion-col>\n            </ion-row>\n    \n            <ion-row>\n                <ion-col size=\"12\">\n                    <p class=\"value title1\">Seller</p>\n                    <p class=\"value person1\">Sasi Kumar</p>\n                    <p class=\"value place1\">Coimbatore,TN</p>\n                    <p class=\"value rating1\">\n                        <ion-icon class=\"value icon1\" name=\"star\"></ion-icon>4.3 rated</p>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <p class=\"value product1\">Quantity</p>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <p class=\"value kg1\">kgs:</p>\n                </ion-col>\n            </ion-row>\n    \n            <ion-row>\n                <ion-col size=\"6\">\n                    <p class=\" value contract1\">Forward Contract</p>\n                    <p class=\" value order1\">Delivery by,</p>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <p class=\"value delivery1\">Sep 18,2018</p>\n                </ion-col>\n            </ion-row>\n    \n            <ion-row>\n                <ion-col size=\"4\">\n                    <p class=\" value icon2\">\n                        <ion-icon name=\"cart\"></ion-icon>\n                    </p>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-button shape=\"round\">ORDER NOW</ion-button>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <p class=\"value icon3\">\n                        <ion-icon name=\"heart-empty\"></ion-icon>\n                    </p>\n                </ion-col>\n            </ion-row>\n    \n        </ion-card>\n    </ion-content>\n    \n    <ion-content *ngIf=\"pageName == 'corn'\">\n            <ion-card>\n                <img src=\"../../assets/cornss.jpeg\" />\n                <div class=\"card-title\">\n                    <P>Corn</P>\n                </div>\n                <div class=\"card-subtitle\">\n                    <h5>Crop</h5>\n                </div>\n        \n                <ion-row>\n                    <ion-col size=\"8\">\n                        <p class=\"value kilo1\">80 kgs</p>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                        <p class=\"value amount1\">Rs. 32.0</p>\n                        <p class=\"value per1\">per kg</p>\n                    </ion-col>\n                </ion-row>\n        \n                <ion-row>\n                    <ion-col size=\"12\">\n                        <p class=\"value title1\">Seller</p>\n                        <p class=\"value person1\">Sasi Kumar</p>\n                        <p class=\"value place1\">Coimbatore,TN</p>\n                        <p class=\"value rating1\">\n                            <ion-icon class=\"value icon1\" name=\"star\"></ion-icon>4.3 rated</p>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col size=\"6\">\n                        <p class=\"value product1\">Quantity</p>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <p class=\"value kg1\">kgs:</p>\n                    </ion-col>\n                </ion-row>\n        \n                <ion-row>\n                    <ion-col size=\"6\">\n                        <p class=\" value contract1\">Forward Contract</p>\n                        <p class=\" value order1\">Delivery by,</p>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <p class=\"value delivery1\">Sep 18,2018</p>\n                    </ion-col>\n                </ion-row>\n        \n                <ion-row>\n                    <ion-col size=\"4\">\n                        <p class=\" value icon2\">\n                            <ion-icon name=\"cart\"></ion-icon>\n                        </p>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                        <ion-button shape=\"round\">ORDER NOW</ion-button>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                        <p class=\"value icon3\">\n                            <ion-icon name=\"heart-empty\"></ion-icon>\n                        </p>\n                    </ion-col>\n                </ion-row>\n        \n            </ion-card>\n        </ion-content>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/preview-delight/preview-delight.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/preview-delight/preview-delight.module.ts ***!
  \*****************************************************************/
/*! exports provided: PreviewDelightPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewDelightPageModule", function() { return PreviewDelightPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _preview_delight_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview-delight.page */ "./src/app/pages/preview-delight/preview-delight.page.ts");







var routes = [
    {
        path: '',
        component: _preview_delight_page__WEBPACK_IMPORTED_MODULE_6__["PreviewDelightPage"]
    }
];
var PreviewDelightPageModule = /** @class */ (function () {
    function PreviewDelightPageModule() {
    }
    PreviewDelightPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_preview_delight_page__WEBPACK_IMPORTED_MODULE_6__["PreviewDelightPage"]]
        })
    ], PreviewDelightPageModule);
    return PreviewDelightPageModule;
}());



/***/ }),

/***/ "./src/app/pages/preview-delight/preview-delight.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/preview-delight/preview-delight.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  padding: 10px;\n  text-align: left;\n  margin-top: -8px;\n  font-size: 17px;\n  font-weight: 550;\n  color: black;\n}\n\nh5 {\n  font-size: 13px;\n  margin-top: -41px;\n  padding: 10px;\n  color: grey;\n}\n\n.kilo1 {\n  margin-top: -61px;\n  text-align: right;\n  margin-right: -45px;\n  font-size: 16px;\n  color: #06668b;\n}\n\n.amount1 {\n  margin-right: -8px;\n  margin-top: -62px;\n  text-align: right;\n  font-size: 17px;\n  color: orange;\n}\n\n.per1 {\n  margin-right: 15px;\n  text-align: right;\n  margin-top: -38px;\n  font-size: 13px;\n  color: orange;\n}\n\n.title1 {\n  font-size: 15px;\n  padding: 5px;\n  margin-top: -22px;\n  color: black;\n}\n\n.person1 {\n  font-size: 13px;\n  padding: 5px;\n  margin-top: -22px;\n  color: grey;\n}\n\n.place1 {\n  font-size: 12px;\n  padding: 5px;\n  margin-top: -20px;\n  color: grey;\n}\n\n.rating1 {\n  font-size: 13px;\n  margin-top: -22px;\n  color: orange;\n  margin-bottom: 10px;\n}\n\n.product1 {\n  padding: 10px;\n  font-size: 15px;\n  margin-top: -23px;\n  color: black;\n}\n\n.kg1 {\n  font-size: 15px;\n  margin-top: -24px;\n  color: grey;\n}\n\n.contract1 {\n  padding: 10px;\n  font-size: 14px;\n  margin-top: -26px;\n  color: black;\n}\n\n.order1 {\n  padding: 10px;\n  font-size: 13px;\n  margin-top: -30px;\n  color: grey;\n}\n\n.delivery1 {\n  padding: 10px;\n  font-size: 13px;\n  text-align: left;\n  margin-left: -91px;\n  color: orange;\n  margin-top: -5px;\n}\n\n.icon2 {\n  font-size: 31px;\n  margin-top: -30px;\n  margin-bottom: -65px;\n  color: orange;\n}\n\n.icon1 {\n  padding: -3px;\n  font-size: 17px;\n  margin-top: -13px;\n  color: #053305;\n}\n\n.icon3 {\n  font-size: 27px;\n  margin-top: -23px;\n  margin-bottom: -8px;\n  text-align: right;\n  color: #da0c95;\n}\n\n.submit {\n  text-align: center;\n  color: black;\n}\n\nion-button {\n  margin-top: -20px;\n  margin-left: -20px;\n  text-align: left;\n  border-radius: 17px;\n  background-color: #00853c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhaGl0aC9Eb2N1bWVudHMvd29yay9uYXR0dXZhLWFwcC9zcmMvYXBwL3BhZ2VzL3ByZXZpZXctZGVsaWdodC9wcmV2aWV3LWRlbGlnaHQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcmV2aWV3LWRlbGlnaHQvcHJldmlldy1kZWxpZ2h0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmV2aWV3LWRlbGlnaHQvcHJldmlldy1kZWxpZ2h0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogNTUwO1xuICAgIGNvbG9yOiBibGFja1xufVxuXG5oNSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi10b3A6IC00MXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6IGdyZXlcbn1cblxuLmtpbG8xe1xuICAgIG1hcmdpbi10b3A6IC02MXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogLTQ1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMDY2NjhiO1xufVxuXG4uYW1vdW50MXtcbiAgICBtYXJnaW4tcmlnaHQ6IC04cHg7XG4gICAgbWFyZ2luLXRvcDogLTYycHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5wZXIxe1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAtMzhweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IG9yYW5nZVxufVxuXG4udGl0bGUxe1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogLTIycHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ucGVyc29uMXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi10b3A6IC0yMnB4O1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4ucGxhY2Uxe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgY29sb3I6IGdyZXk7XG59XG5cbi5yYXRpbmcxIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLXRvcDogLTIycHg7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucHJvZHVjdDEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IC0yM3B4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmtnMSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IC0yNHB4O1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4uY29udHJhY3QxIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAtMjZweDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5vcmRlcjEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4uZGVsaXZlcnkxIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAtOTFweDtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5pY29uMiB7XG4gICAgZm9udC1zaXplOiAzMXB4O1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC02NXB4O1xuICAgIGNvbG9yOiBvcmFuZ2Vcbn1cblxuLmljb24xIHtcbiAgICBwYWRkaW5nOiAtM3B4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBtYXJnaW4tdG9wOiAtMTNweDtcbiAgICBjb2xvcjogIzA1MzMwNTtcbn1cblxuLmljb24zIHtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gICAgbWFyZ2luLXRvcDogLTIzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogI2RhMGM5NTtcbn1cblxuLnN1Ym1pdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBibGFja1xufVxuXG5cbmlvbi1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODUzYztcbn0iLCJwIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogLThweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTUwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAtNDFweDtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5raWxvMSB7XG4gIG1hcmdpbi10b3A6IC02MXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAtNDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzA2NjY4Yjtcbn1cblxuLmFtb3VudDEge1xuICBtYXJnaW4tcmlnaHQ6IC04cHg7XG4gIG1hcmdpbi10b3A6IC02MnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4ucGVyMSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC0zOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi50aXRsZTEge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogLTIycHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnBlcnNvbjEge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogLTIycHg7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4ucGxhY2UxIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBjb2xvcjogZ3JleTtcbn1cblxuLnJhdGluZzEge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IC0yMnB4O1xuICBjb2xvcjogb3JhbmdlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucHJvZHVjdDEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC0yM3B4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5rZzEge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICBjb2xvcjogZ3JleTtcbn1cblxuLmNvbnRyYWN0MSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogLTI2cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm9yZGVyMSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uZGVsaXZlcnkxIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogLTkxcHg7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5pY29uMiB7XG4gIGZvbnQtc2l6ZTogMzFweDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIG1hcmdpbi1ib3R0b206IC02NXB4O1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uaWNvbjEge1xuICBwYWRkaW5nOiAtM3B4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi10b3A6IC0xM3B4O1xuICBjb2xvcjogIzA1MzMwNTtcbn1cblxuLmljb24zIHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBtYXJnaW4tdG9wOiAtMjNweDtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjZGEwYzk1O1xufVxuXG4uc3VibWl0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NTNjO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/preview-delight/preview-delight.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/preview-delight/preview-delight.page.ts ***!
  \***************************************************************/
/*! exports provided: PreviewDelightPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewDelightPage", function() { return PreviewDelightPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PreviewDelightPage = /** @class */ (function () {
    function PreviewDelightPage(router, route) {
        this.router = router;
        this.route = route;
        this.sliderConfig = {
            slidesPerView: 1.3,
            spaceBetween: 0,
            centeredSlides: true,
        };
        this.pageName = this.route.snapshot.paramMap.get('page');
    }
    PreviewDelightPage.prototype.ngOnInit = function () {
    };
    PreviewDelightPage.prototype.goto = function (value) {
        this.router.navigate(['preview-wheat', { "page": value }]);
    };
    PreviewDelightPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PreviewDelightPage.prototype, "slides", void 0);
    PreviewDelightPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preview-delight',
            template: __webpack_require__(/*! raw-loader!./preview-delight.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/preview-delight/preview-delight.page.html"),
            styles: [__webpack_require__(/*! ./preview-delight.page.scss */ "./src/app/pages/preview-delight/preview-delight.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PreviewDelightPage);
    return PreviewDelightPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-preview-delight-preview-delight-module-es5.js.map