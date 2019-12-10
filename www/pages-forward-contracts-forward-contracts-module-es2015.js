(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forward-contracts-forward-contracts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/forward-contracts/forward-contracts.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/forward-contracts/forward-contracts.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Track Orders\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\">\n      <p class=\"value card-title\">Vegetables</p>\n      <p class=\"value card-subtitle\">Tomato</p>\n      <p class=\"value kilogram\">85kg</p>\n    </ion-col>\n  </ion-row>\n  <p class=\"value subtitle\">In the farm</p>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ul>\n        <p class=\"value seed\">\n          <li>Seeds planted</li>\n        </p>\n        <p class=\"value date\">30th June,18</p>\n        <p class=\"value description\">The type and quality of seed will be</p>\n        <p class=\"value desc\">written here.</p>\n      </ul>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ul>\n        <p class=\"value seed\">\n          <li>Seeds Germinated</li>\n        </p>\n        <p class=\"value date\">28th July,18</p>\n        <p class=\"value description\">A brief description</p>\n      </ul>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ul>\n        <p class=\"value seeds\">\n          <li>Flowering</li>\n        </p>\n        <p class=\"value month\">Expected by mid september</p>\n      </ul>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ul>\n        <p class=\"value seeds\">\n          <li>Harvesting</li>\n        </p>\n        <p class=\"value date\">Expected by mid october</p>\n      </ul>\n    </ion-col>\n  </ion-row>\n  <p class=\"value subtitle\">Transportation</p>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ul>\n        <p class=\"value seeds\">\n          <li>Packed</li>\n        </p>\n        <p class=\"value month\">Expected by early november</p>\n      </ul>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ul>\n        <p class=\"value seeds\">\n          <li>Shipped</li>\n        </p>\n        <p class=\"value month\">Expected by early november</p>\n      </ul>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ul>\n        <p class=\"value seeds\">\n          <li>Delivery</li>\n        </p>\n        <p class=\"value month\">Expected by early november</p>\n      </ul>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/forward-contracts/forward-contracts.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/forward-contracts/forward-contracts.module.ts ***!
  \*********************************************************************/
/*! exports provided: ForwardContractsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForwardContractsPageModule", function() { return ForwardContractsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forward_contracts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forward-contracts.page */ "./src/app/pages/forward-contracts/forward-contracts.page.ts");







const routes = [
    {
        path: '',
        component: _forward_contracts_page__WEBPACK_IMPORTED_MODULE_6__["ForwardContractsPage"]
    }
];
let ForwardContractsPageModule = class ForwardContractsPageModule {
};
ForwardContractsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_forward_contracts_page__WEBPACK_IMPORTED_MODULE_6__["ForwardContractsPage"]]
    })
], ForwardContractsPageModule);



/***/ }),

/***/ "./src/app/pages/forward-contracts/forward-contracts.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/forward-contracts/forward-contracts.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.card-title {\n  margin-top: 13px;\n  font-family: \"Roboto, san-serif, aria\";\n  font-size: 16px;\n  color: grey;\n  margin-left: 17px;\n}\n.card-subtitle {\n  margin-top: -17px;\n  font-size: 29px;\n  font-weight: w600;\n  color: black;\n  font-family: \"Roboto, san-serif, aria\";\n  margin-left: 17px;\n}\n.kilogram {\n  margin-top: -31px;\n  font-size: 13px;\n  color: grey;\n  margin-left: 21px;\n}\n.subtitle {\n  text-align: left;\n  font-size: 27px;\n  margin-top: 10px;\n  margin-bottom: -10px;\n  margin-left: 33px;\n  font-weight: w600;\n  color: #076907;\n}\nul li::before {\n  content: \"•\";\n  color: #076907;\n  font-weight: bold;\n  display: inline-block;\n  width: 1em;\n  margin-left: -1em;\n}\n.seed {\n  margin-top: -12px;\n  margin-top: 13px;\n  font-family: \"Roboto, san-serif, aria\";\n  margin-left: 17px;\n  font-size: 24px;\n  font-weight: w600;\n}\n.date {\n  margin-top: -24px;\n  margin-left: 22px;\n  font-family: \"Roboto, san-serif, aria\";\n  font-size: 16px;\n  color: grey;\n}\n.month {\n  margin-top: -24px;\n  margin-left: 22px;\n  font-family: \"Roboto, san-serif, aria\";\n  font-size: 16px;\n  color: grey;\n  margin-bottom: -21px;\n}\n.description {\n  margin-top: -5px;\n  margin-left: 20px;\n  font-family: \"Roboto, san-serif, aria\";\n  font-size: 18px;\n  color: grey;\n}\n.desc {\n  font-family: \"Roboto, san-serif, aria\";\n  font-size: 18px;\n  color: grey;\n  margin-top: -18px;\n  margin-left: 20px;\n  margin-bottom: -24px;\n}\n.seeds {\n  margin-top: -12px;\n  margin-top: 13px;\n  font-family: \"Roboto, san-serif, aria\";\n  margin-left: 17px;\n  font-size: 24px;\n  font-weight: w600;\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yd2FyZC1jb250cmFjdHMvZm9yd2FyZC1jb250cmFjdHMucGFnZS5zY3NzIiwiL2hvbWUvc2FoaXRoL0RvY3VtZW50cy93b3JrL25hdHR1dmEtYXBwL3NyYy9hcHAvcGFnZXMvZm9yd2FyZC1jb250cmFjdHMvZm9yd2FyZC1jb250cmFjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FERUo7QUNDQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7QURFSjtBQ0VBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRENKO0FDRUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QURDSjtBQ0lBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURESjtBQ0lBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QURESjtBQ0lBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBRERKO0FDSUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRERKO0FDSUE7RUFDSSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FEREo7QUNJQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBRERKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9yd2FyZC1jb250cmFjdHMvZm9yd2FyZC1jb250cmFjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8sIHNhbi1zZXJpZiwgYXJpYVwiO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiBncmV5O1xuICBtYXJnaW4tbGVmdDogMTdweDtcbn1cblxuLmNhcmQtc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAtMTdweDtcbiAgZm9udC1zaXplOiAyOXB4O1xuICBmb250LXdlaWdodDogdzYwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8sIHNhbi1zZXJpZiwgYXJpYVwiO1xuICBtYXJnaW4tbGVmdDogMTdweDtcbn1cblxuLmtpbG9ncmFtIHtcbiAgbWFyZ2luLXRvcDogLTMxcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyZXk7XG4gIG1hcmdpbi1sZWZ0OiAyMXB4O1xufVxuXG4uc3VidGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDI3cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogMzNweDtcbiAgZm9udC13ZWlnaHQ6IHc2MDA7XG4gIGNvbG9yOiAjMDc2OTA3O1xufVxuXG51bCBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKJcIjtcbiAgY29sb3I6ICMwNzY5MDc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxZW07XG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xufVxuXG4uc2VlZCB7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8sIHNhbi1zZXJpZiwgYXJpYVwiO1xuICBtYXJnaW4tbGVmdDogMTdweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogdzYwMDtcbn1cblxuLmRhdGUge1xuICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90bywgc2FuLXNlcmlmLCBhcmlhXCI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5tb250aCB7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLCBzYW4tc2VyaWYsIGFyaWFcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogZ3JleTtcbiAgbWFyZ2luLWJvdHRvbTogLTIxcHg7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8sIHNhbi1zZXJpZiwgYXJpYVwiO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uZGVzYyB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90bywgc2FuLXNlcmlmLCBhcmlhXCI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGdyZXk7XG4gIG1hcmdpbi10b3A6IC0xOHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTI0cHg7XG59XG5cbi5zZWVkcyB7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8sIHNhbi1zZXJpZiwgYXJpYVwiO1xuICBtYXJnaW4tbGVmdDogMTdweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogdzYwMDtcbiAgY29sb3I6IGdyZXk7XG59IiwiLmNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLCBzYW4tc2VyaWYsIGFyaWFcIjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgbWFyZ2luLWxlZnQ6IDE3cHg7XG59XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcbiAgICBmb250LXNpemU6IDI5cHg7XG4gICAgZm9udC13ZWlnaHQ6IHc2MDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90bywgc2FuLXNlcmlmLCBhcmlhXCI7XG4gICAgbWFyZ2luLWxlZnQ6IDE3cHg7XG4gICAgXG59XG5cbi5raWxvZ3JhbXtcbiAgICBtYXJnaW4tdG9wOiAtMzFweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgbWFyZ2luLWxlZnQ6IDIxcHg7XG59XG5cbi5zdWJ0aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMzNweDtcbiAgICBmb250LXdlaWdodDogdzYwMDtcbiAgICBjb2xvcjogIzA3NjkwNztcbn1cblxudWwgbGk6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIwMjJcIjtcbiAgICBjb2xvcjogIzA3NjkwNztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICAgIHdpZHRoOiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IC0xZW1cbn1cblxuXG5cbi5zZWVkIHtcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90bywgc2FuLXNlcmlmLCBhcmlhXCI7XG4gICAgbWFyZ2luLWxlZnQ6IDE3cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiB3NjAwO1xufVxuXG4uZGF0ZSB7XG4gICAgbWFyZ2luLXRvcDogLTI0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLCBzYW4tc2VyaWYsIGFyaWFcIjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IGdyZXk7XG59XG5cbi5tb250aCB7XG4gICAgbWFyZ2luLXRvcDogLTI0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLCBzYW4tc2VyaWYsIGFyaWFcIjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgbWFyZ2luLWJvdHRvbTogLTIxcHg7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8sIHNhbi1zZXJpZiwgYXJpYVwiO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuLmRlc2Mge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90bywgc2FuLXNlcmlmLCBhcmlhXCI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiBncmV5O1xuICAgIG1hcmdpbi10b3A6IC0xOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206LTI0cHg7XG59XG5cbi5zZWVkcyB7XG4gICAgbWFyZ2luLXRvcDogLTEycHg7XG4gICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8sIHNhbi1zZXJpZiwgYXJpYVwiO1xuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogdzYwMDtcbiAgICBjb2xvcjpncmV5IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/forward-contracts/forward-contracts.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/forward-contracts/forward-contracts.page.ts ***!
  \*******************************************************************/
/*! exports provided: ForwardContractsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForwardContractsPage", function() { return ForwardContractsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForwardContractsPage = class ForwardContractsPage {
    constructor() { }
    ngOnInit() {
    }
};
ForwardContractsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forward-contracts',
        template: __webpack_require__(/*! raw-loader!./forward-contracts.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/forward-contracts/forward-contracts.page.html"),
        styles: [__webpack_require__(/*! ./forward-contracts.page.scss */ "./src/app/pages/forward-contracts/forward-contracts.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ForwardContractsPage);



/***/ })

}]);
//# sourceMappingURL=pages-forward-contracts-forward-contracts-module-es2015.js.map