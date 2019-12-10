(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-apply-for-loan-apply-for-loan-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/apply-for-loan/apply-for-loan.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/apply-for-loan/apply-for-loan.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Apply for loan\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <p class=\"title\">Choose a bank</p>\n    <ion-card>\n        <img src=\"../../assets/icici.png\" />\n    </ion-card>\n    <ion-card>\n        <img src=\"../../assets/canara.png\" />\n    </ion-card>\n    <ion-card>\n        <img src=\"../../assets/sbi.jpg\" />\n    </ion-card>\n    <ion-card>\n        <img src=\"../../assets/ubi.png\" />\n    </ion-card>\n    <p class=\"sub-title\">Other banks</p>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/apply-for-loan/apply-for-loan.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/apply-for-loan/apply-for-loan.module.ts ***!
  \***************************************************************/
/*! exports provided: ApplyForLoanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyForLoanPageModule", function() { return ApplyForLoanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _apply_for_loan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apply-for-loan.page */ "./src/app/pages/apply-for-loan/apply-for-loan.page.ts");







var routes = [
    {
        path: '',
        component: _apply_for_loan_page__WEBPACK_IMPORTED_MODULE_6__["ApplyForLoanPage"]
    }
];
var ApplyForLoanPageModule = /** @class */ (function () {
    function ApplyForLoanPageModule() {
    }
    ApplyForLoanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_apply_for_loan_page__WEBPACK_IMPORTED_MODULE_6__["ApplyForLoanPage"]]
        })
    ], ApplyForLoanPageModule);
    return ApplyForLoanPageModule;
}());



/***/ }),

/***/ "./src/app/pages/apply-for-loan/apply-for-loan.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/apply-for-loan/apply-for-loan.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: left;\n  padding: 10px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-size: 17px;\n  font-family: \"Montserrat\";\n  color: black;\n}\n\n.sub-title {\n  text-align: center;\n  font-size: 13px;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  font-family: \"Montserrat\";\n  color: black;\n}\n\n.sc-ion-card-md-s img {\n  display: block;\n  max-width: 55%;\n  padding: 15px;\n}\n\nion-card {\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhaGl0aC9Eb2N1bWVudHMvd29yay9uYXR0dXZhLWFwcC9zcmMvYXBwL3BhZ2VzL2FwcGx5LWZvci1sb2FuL2FwcGx5LWZvci1sb2FuLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXBwbHktZm9yLWxvYW4vYXBwbHktZm9yLWxvYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXBwbHktZm9yLWxvYW4vYXBwbHktZm9yLWxvYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICAgIGNvbG9yOiBibGFja1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgICBjb2xvcjogYmxhY2tcbn1cblxuLnNjLWlvbi1jYXJkLW1kLXMgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6IDU1JTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSIsIi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zdWItdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zYy1pb24tY2FyZC1tZC1zIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDU1JTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/apply-for-loan/apply-for-loan.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/apply-for-loan/apply-for-loan.page.ts ***!
  \*************************************************************/
/*! exports provided: ApplyForLoanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyForLoanPage", function() { return ApplyForLoanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApplyForLoanPage = /** @class */ (function () {
    function ApplyForLoanPage() {
    }
    ApplyForLoanPage.prototype.ngOnInit = function () {
    };
    ApplyForLoanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apply-for-loan',
            template: __webpack_require__(/*! raw-loader!./apply-for-loan.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/apply-for-loan/apply-for-loan.page.html"),
            styles: [__webpack_require__(/*! ./apply-for-loan.page.scss */ "./src/app/pages/apply-for-loan/apply-for-loan.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApplyForLoanPage);
    return ApplyForLoanPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-apply-for-loan-apply-for-loan-module-es5.js.map