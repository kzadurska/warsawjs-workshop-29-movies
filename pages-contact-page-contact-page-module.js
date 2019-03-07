(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-page-contact-page-module"],{

/***/ "./src/app/pages/contact-page/contact-page-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ContactPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function() { return ContactPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _contact_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-page.component */ "./src/app/pages/contact-page/contact-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [{
        path: '',
        component: _contact_page_component__WEBPACK_IMPORTED_MODULE_1__["ContactPageComponent"]
    }];
var ContactPageRoutingModule = /** @class */ (function () {
    function ContactPageRoutingModule() {
    }
    ContactPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], ContactPageRoutingModule);
    return ContactPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/contact-page/contact-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 700px;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://instagram.flux1-1.fna.fbcdn.net/vp/9e93d5078c39db5d2b76a935549d9256/5CEE5389/t51.2885-19/s150x150/47584847_2223430994579574_791224587575623680_n.jpg?_nc_ht=instagram.flux1-1.fna.fbcdn.net');\r\n    background-size: cover;\r\n  }\r\n  \r\n  .container {\r\n    display: flex;\r\n    justify-content: center;\r\n    \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLDROQUE0TjtJQUM1TixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCOztFQUV6QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtcGFnZS9jb250YWN0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIG1hcmdpbjogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbnN0YWdyYW0uZmx1eDEtMS5mbmEuZmJjZG4ubmV0L3ZwLzllOTNkNTA3OGMzOWRiNWQyYjc2YTkzNTU0OWQ5MjU2LzVDRUU1Mzg5L3Q1MS4yODg1LTE5L3MxNTB4MTUwLzQ3NTg0ODQ3XzIyMjM0MzA5OTQ1Nzk1NzRfNzkxMjI0NTg3NTc1NjIzNjgwX24uanBnP19uY19odD1pbnN0YWdyYW0uZmx1eDEtMS5mbmEuZmJjZG4ubmV0Jyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/contact-page/contact-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Kasia</mat-card-title>\n    <mat-card-subtitle>Author of this website</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <p>\n      A highly resourceful and competent front-end engineer with passion for good quality code and attention to detail. Willing to learn and discover new things which drives me to improve myself constantly. Ambitious, well-organised, always smiling\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <a href=\"https://twitter.com/kzadurska\" mat-button>Twitter</a>\n    <a href=\"https://github.com/kzadurska\" mat-button>Github</a>\n    <a href=\"https://www.linkedin.com/in/kzadurska/\" mat-button>Linkedin</a>\n  </mat-card-actions>\n</mat-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/contact-page/contact-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent() {
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__(/*! ./contact-page.component.html */ "./src/app/pages/contact-page/contact-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-page.component.css */ "./src/app/pages/contact-page/contact-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact-page/contact-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.module.ts ***!
  \***********************************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _contact_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-page.component */ "./src/app/pages/contact-page/contact-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _contact_page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-page-routing.module */ "./src/app/pages/contact-page/contact-page-routing.module.ts");







var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_contact_page_component__WEBPACK_IMPORTED_MODULE_1__["ContactPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _contact_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["ContactPageRoutingModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ]
        })
    ], ContactPageModule);
    return ContactPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-contact-page-contact-page-module.js.map