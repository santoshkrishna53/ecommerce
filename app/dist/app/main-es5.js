(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header style=\"max-width: 100% !important;\"></app-header>\r\n<!-- <ng-sidebar-container style=\"height: 100vh !important;margin-top: 80px !important;\">\r\n    <ng-sidebar [(opened)]=\"_opened\" [mode]=\"push\" [dock]=\"dock\" [dockedSize]=\"'50px'\">\r\n        <div style=\"display: flex; flex-direction: column;height: 100% !important;width: 300px\">\r\n            <div style=\"flex: 1;align-items: center;vertical-align: middle\">\r\n                    <button mat-button class=\"sidenav_button\" routerLink=\"/products\" routerLinkActive=\"active\">products</button>\r\n\r\n            </div>\r\n            <div style=\"flex: 1\">\r\n                    <button routerLink=\"/userauth\" routerLinkActive=\"active\" mat-button class=\"sidenav_button\">login/signup</button>\r\n            </div>\r\n            <div style=\"flex: 1\">\r\n                    <button mat-button class=\"sidenav_button\"  routerLink=\"/cart\" routerLinkActive=\"active\">kart</button>\r\n            </div>\r\n           \r\n            \r\n            \r\n            \r\n           \r\n            \r\n\r\n\r\n        </div>\r\n\r\n    </ng-sidebar>\r\n    <div ng-sidebar-content>\r\n        <button (click)=\"_toggleSidebar()\">Toggle sidebar</button>\r\n        \r\n       \r\n\r\n    </div>\r\n\r\n\r\n</ng-sidebar-container> -->\r\n<div style=\"height: 86vh !important;margin-top: 80px !important;max-width: 100% !important;\">\r\n    <router-outlet ></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row heigth\">\r\n  <div class=\"col-lg-8 col-md-12 heigth\">\r\n    <div class=\"row center\">\r\n      <h1 class=\"center\">\r\n        Your Cart\r\n      </h1>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n      <table mat-table [dataSource]=\"products[0]\" class=\"mat-elevation-z8\">\r\n        <!-- Item Column -->\r\n        <ng-container matColumnDef=\"item\">\r\n          <th mat-header-cell *matHeaderCellDef> <strong>Item</strong> </th>\r\n          <td mat-cell *matCellDef=\"let product\"> {{product.name}} </td>\r\n          <td mat-footer-cell *matFooterCellDef> Total </td>\r\n        </ng-container>\r\n\r\n        <!-- Cost Column -->\r\n        <ng-container matColumnDef=\"cost\">\r\n          <th mat-header-cell *matHeaderCellDef> <strong>Cost</strong> </th>\r\n          <td mat-cell *matCellDef=\"let product\"> {{product.price}} </td>\r\n          <td mat-footer-cell *matFooterCellDef> Total no of Products </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"Quantity\">\r\n          <th mat-header-cell *matHeaderCellDef> <Strong>Quantity</Strong> </th>\r\n          <td mat-cell *matCellDef=\"let product\">{{product.quantity}} </td>\r\n          <td mat-footer-cell *matFooterCellDef>{{total_items}}</td>\r\n\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Action\">\r\n          <th mat-header-cell *matHeaderCellDef><strong> Action </strong> </th>\r\n          <td mat-cell *matCellDef=\"let product\"><button mat-raised-button color=\"warn\"\r\n              (click)=\"remove_item(product)\">remove</button> </td>\r\n          <td mat-footer-cell *matFooterCellDef></td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Price\">\r\n          <th mat-header-cell *matHeaderCellDef><strong> Effective price </strong></th>\r\n          <td mat-cell *matCellDef=\"let product\"> {{product.price * product.quantity}} </td>\r\n          <td mat-footer-cell *matFooterCellDef>{{total}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\r\n      </table>\r\n    </div>\r\n    <div class=\"row\">\r\n      <h1 class=\"center\" style=\"margin-bottom: 50px;margin-top: 50px;\">\r\n        Payment Methods\r\n      </h1>\r\n    </div>\r\n    <div class=\"row \">\r\n      <div class=\"col-lg-2\"></div>\r\n      <div class=\"col-lg-8\">\r\n          <mat-accordion>\r\n              <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                    Credict/debit Cards\r\n                  </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <mat-form-field>\r\n                  <mat-label>Name on Card</mat-label><input matInput placeholder=\"Santhosh Krishna\" >\r\n                </mat-form-field><br>\r\n                <mat-form-field>\r\n                  <mat-label>Card Number</mat-label><input matInput #Cardnumber maxlength=\"10\" placeholder=\"517507\">\r\n                  <mat-hint align=\"end\">{{Cardnumber.value.length}} / 10</mat-hint>\r\n                </mat-form-field><br>\r\n                <mat-form-field>\r\n                  <mat-label>CVV</mat-label><input matInput type=\"password\" placeholder=\"***\" maxlength=\"3\">\r\n                </mat-form-field><br>\r\n              </mat-expansion-panel>\r\n              <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                    Online Wallets\r\n                  </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n               \r\n                <mat-radio-group id=\"Wallets\">\r\n                  <mat-radio-button value=\"Paytm\">\r\n                    Paytm\r\n                  </mat-radio-button><br>\r\n                  <mat-radio-button value=\"Google Pay\">\r\n                    Google Pay\r\n                  </mat-radio-button><br>\r\n                  <mat-radio-button value=\"Phone Pay\">\r\n                    Phone Pay\r\n                  </mat-radio-button><br>\r\n                </mat-radio-group>\r\n              </mat-expansion-panel>\r\n            </mat-accordion>\r\n\r\n      </div>\r\n      <div class=\"col-lg-2\"></div>\r\n     \r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col-lg-4 col-md-12 center heigth\">\r\n    <div class=\"row center\" >\r\n      <h1 style=\"text-align: center;\" class=\"center\">\r\n        Billing Information\r\n      </h1>\r\n\r\n    </div>\r\n    <div class=\"row center\">\r\n      <form [formGroup]=\"Billing\" style=\"width: 100% !important; \" class=\"center\">\r\n        <mat-form-field>\r\n            <mat-label>First name</mat-label><input matInput placeholder=\"Santhosh Krishna\" formControlName=\"FirstName\">\r\n          </mat-form-field><br>\r\n          <mat-form-field>\r\n            <mat-label>Last name</mat-label><input matInput placeholder=\"Last Name\" formControlName=\"LastName\">\r\n          </mat-form-field><br>\r\n          <mat-form-field>\r\n            <mat-label>Adress Line 1</mat-label><input matInput placeholder=\"M block\" formControlName=\"AdressLine1\">\r\n          </mat-form-field><br>\r\n          <mat-form-field>\r\n            <mat-label>Adress Line 2</mat-label><input matInput placeholder=\"Vit\" formControlName=\"AdressLine2\">\r\n          </mat-form-field><br>\r\n          <mat-form-field>\r\n            <mat-label>Adress Line 3</mat-label><input matInput placeholder=\"VIT ROAD\" formControlName=\"AdressLine3\">\r\n          </mat-form-field><br>\r\n      \r\n          <mat-form-field>\r\n            <mat-label>State</mat-label>\r\n            <mat-select #State required formControlName=\"State\">\r\n              <mat-option>--</mat-option>\r\n              <mat-option *ngFor=\"let state of states\" [value]=\"state\">\r\n                {{state}}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"State.value == '--'\">Please choose an State</mat-error>\r\n      \r\n          </mat-form-field><br>\r\n          <mat-form-field>\r\n            <mat-label>Pin Code</mat-label><input matInput #postalCode maxlength=\"6\" minlength=\"6\" placeholder=\"517507\" formControlName=\"PinCode\">\r\n            <mat-hint align=\"end\">{{postalCode.value.length}} / 6</mat-hint>\r\n          </mat-form-field><br>\r\n          </form>\r\n      \r\n  \r\n    </div>\r\n    <div class=\"row center\" style=\"margin-top: 50px;\">\r\n      <button class=\"center\" (click)=\"Billing_()\"mat-raised-button color=\"primary\">Confirm Order</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n   <nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\" style=\"max-width: 100% !important;\">\r\n    <a class=\"navbar-brand\" href=\"#\">Smart Electronics</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"/products\" routerLinkActive=\"active\">Products <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        \r\n       \r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Categories\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <mat-checkbox class=\"dropdown-item\" [(ngModel)]=\"Mobile\" (change)=\"changed()\">Mobile</mat-checkbox>\r\n            <mat-checkbox class=\"dropdown-item\" [(ngModel)]=\"laptop\" (change)=\"changed()\">laptop</mat-checkbox>\r\n            <mat-checkbox class=\"dropdown-item\" [(ngModel)]=\"desktop\" (change)=\"changed()\">Desktop</mat-checkbox>\r\n           \r\n          </div>\r\n        </li>\r\n        \r\n      </ul>\r\n      <ul class=\"navbar-nav ml-auto\" >\r\n        <li class=\"nav-item\" style=\"margin-right: 30px;\" *ngIf=\"user_status\">\r\n           <a class=\"nav-link\" routerLink=\"/cart\" routerLinkActive=\"active\" [matBadge]=\"cart_total\"><i class=\"fa fa-cart-plus fa-2x\" aria-hidden=\"true\"></i></a>\r\n\r\n        </li>\r\n        <li class=\"nav-item dropdown\" style=\"margin-right: 100px;\" *ngIf=\"user_status\">\r\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <i class=\"fa fa-user-circle-o fa-2x\" aria-hidden=\"true\"></i>\r\n              </a>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\" >\r\n                <a class=\"dropdown-item\"   routerLink=\"/dashboard\" routerLinkActive=\"active\" >Profile</a>\r\n                <a class=\"dropdown-item\" (click)=\"Logout()\">Logout</a>\r\n                \r\n               \r\n              </div>\r\n            </li>\r\n          <li class=\"nav-item\" *ngIf=\"!user_status\">\r\n              <button mat-raised-button color=\"primary\" routerLink=\"/userauth\" routerLinkActive=\"active\">login/Signup</button>\r\n          </li>\r\n          \r\n          \r\n\r\n      </ul>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-left: 150px;\">\r\n    <span *ngFor=\"let product of products[0]\" style=\"padding: 25px !important;\">\r\n        <div class=\"main-card\" *ngIf=\"test(product)\" style=\"min-width: 350px !important;\">\r\n           \r\n                <figure class=\"card card-product\">\r\n                    <div class=\"img-wrap\" style=\"padding-bottom: 5px !important;padding-top: 5px !important;padding: 5px !important;\"><img src={{product.Image}} height=\"100%\" width=\"100%\"></div>\r\n                    <figcaption class=\"info-wrap\">\r\n                            <h4 class=\"title\">{{product.name}}</h4>\r\n                            <p class=\"desc\">{{product.description}}</p>\r\n                            <div class=\"rating-wrap\">\r\n                                <div class=\"label-rating\">132 reviews</div>\r\n                                <div class=\"label-rating\">154 orders </div>\r\n                            </div> <!-- rating-wrap.// -->\r\n                    </figcaption>\r\n                    <div class=\"bottom-wrap\">\r\n                        <span *ngIf=\"product.quantity>0\"><button mat-raised-button color=\"primary\" *ngIf=\"auth\" (click)=\"addtokart(product)\" class=\"float-right\">add to kart</button></span>\r\n                        <span *ngIf=\"!(product.quantity>0)\" style=\"color: red;\" class=\"float-right\">out of Stock</span>\r\n                        \r\n                        <div class=\"price-wrap h5\">\r\n                            <span class=\"price-new\">${{product.price}}</span> <del class=\"price-old\">${{product.price - 1000}}</del>\r\n                        </div> <!-- price-wrap.// -->\r\n                    </div> <!-- bottom-wrap.// -->\r\n                </figure>\r\n               \r\n            </div> <!-- col // -->\r\n            </span>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 50px;\">\r\n    <mat-card style=\"width: 400px;min-height: 500px;text-align: center;margin: 0 auto;\">\r\n            <mat-button-toggle-group #group=\"matButtonToggleGroup\" style=\"text-align: center;width: 80%;\">\r\n                    <mat-button-toggle value=\"login\" style=\"width: 50%;\">login</mat-button-toggle>\r\n                    <mat-button-toggle value=\"signup\" style=\"width: 50%;font-size: 20px;\">signup</mat-button-toggle>\r\n                </mat-button-toggle-group>\r\n        <mat-card-title style=\"text-align: center;margin-top: 25px;color: rgba(0, 0, 0, 0.568)\">{{group.value}}</mat-card-title>\r\n        <mat-card-content style=\"vertical-align: middle;\">\r\n                <div class=\"register\"  *ngIf=\"group.value == 'signup'\" [@inOutAnimation] style=\"text-align: center;\">\r\n                    <form [formGroup]=\"registerForm\">\r\n                        \r\n                                <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Email adress</mat-label>\r\n                                    <input matInput placeholder=\"Placeholder\" formControlName=\"email\">\r\n                                </mat-form-field>\r\n                           \r\n                        \r\n                                <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>First Name</mat-label>\r\n                                    <input matInput placeholder=\"Placeholder\" formControlName=\"username\">\r\n                                </mat-form-field>\r\n                            \r\n                        \r\n                                <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Last Name</mat-label>\r\n                                    <input matInput placeholder=\"Placeholder\">\r\n                                </mat-form-field>\r\n                           \r\n                                <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Password</mat-label>\r\n                                    <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\">\r\n                                </mat-form-field>\r\n                                <br>\r\n                                <button mat-raised-button color=\"primary\" (click)=\"signup()\">Sign Up</button>\r\n                    \r\n                            </form>   \r\n            \r\n                        </div>\r\n                        \r\n            \r\n                   \r\n                        <form [formGroup]=\"loginform\">\r\n                        <div class=\"login\"  *ngIf=\"group.value == 'login'\" [@inOutAnimation] style=\"text-align: center;vertical-align: middle;\">\r\n                        \r\n                           \r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                    <mat-label>User id or Email</mat-label>\r\n                                                    <input matInput placeholder=\"username\" formControlName=\"username\">\r\n                                            </mat-form-field>\r\n                                            <br>\r\n                        \r\n                        \r\n                                  \r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                    <mat-label>Password</mat-label>\r\n                                                    <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\">\r\n                                                </mat-form-field>\r\n                                                <br>\r\n                        \r\n                        \r\n                                   \r\n                                            <button mat-raised-button color=\"primary\" (click)=\"login()\">Login</button>\r\n                                          \r\n                        \r\n                                   \r\n                            </div>\r\n                        </form>\r\n                \r\n\r\n        </mat-card-content>\r\n\r\n    </mat-card>\r\n    <!-- <div style=\"flex: 2;\" >\r\n        <mat-button-toggle-group #group=\"matButtonToggleGroup\">\r\n            <mat-button-toggle value=\"login\">login</mat-button-toggle>\r\n            <mat-button-toggle value=\"signup\">signup</mat-button-toggle>\r\n        </mat-button-toggle-group>\r\n        <p>{{group.value}} test</p>\r\n        <div class=\"register\"  *ngIf=\"group.value == 'signup'\" [@inOutAnimation]>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Email adress</mat-label>\r\n                        <input matInput placeholder=\"Placeholder\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>First Name</mat-label>\r\n                        <input matInput placeholder=\"Placeholder\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Last Name</mat-label>\r\n                        <input matInput placeholder=\"Placeholder\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Password</mat-label>\r\n                        <input matInput placeholder=\"Password\" type=\"password\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                            <button mat-raised-button color=\"primary\">Sign Up</button>\r\n        \r\n                    </div>\r\n\r\n            </div>\r\n            \r\n\r\n        </div>\r\n        <div class=\"login\"  *ngIf=\"group.value == 'login'\" [@inOutAnimation]>\r\n            <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                            <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>User id or Email</mat-label>\r\n                                    <input matInput placeholder=\"Password\">\r\n                                </mat-form-field>\r\n        \r\n        \r\n                    </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                            <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Password</mat-label>\r\n                                    <input matInput placeholder=\"Password\" type=\"password\">\r\n                                </mat-form-field>\r\n        \r\n        \r\n                    </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                            <button mat-raised-button color=\"primary\">Login</button>\r\n        \r\n                    </div>\r\n\r\n            </div>\r\n\r\n                \r\n            \r\n\r\n        </div>\r\n\r\n    </div> -->\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/upload/upload.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/upload/upload.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- name: <input type=\"text\" id=\"n\" [(ngModel)]=\"name\">\r\nid: <input type=\"text\" id=\"id\" [(ngModel)]=\"id\">\r\nquantity: <input type=\"text\" id=\"q\"[(ngModel)]=\"quantity\">\r\ndescription: <input type=\"text\" id=\"d\"[(ngModel)]=\"description\">\r\nPrice: <input type=\"text\" id=\"p\"[(ngModel)]=\"Price\">\r\nImage: <input type=\"text\" id=\"i\"[(ngModel)]=\"Image\"> \r\nCategory: <input type=\"text\" id=\"c\"[(ngModel)]=\"Category\"> -->\r\n<div class=\"container\" style=\"margin: auto;width: 800px !important;\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-8\">\r\n            <mat-form-field>\r\n                <mat-label>Name</mat-label><input matInput type=\"text\" id=\"n\" [(ngModel)]=\"name\">\r\n            </mat-form-field>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-8\">\r\n            <mat-form-field>\r\n                <mat-label>ID</mat-label><input matInput type=\"text\" id=\"id\" [(ngModel)]=\"id\">\r\n            </mat-form-field>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-8\">\r\n            <mat-form-field>\r\n                <mat-label>quantity:</mat-label> <input matInput type=\"text\" id=\"q\" [(ngModel)]=\"quantity\">\r\n            </mat-form-field>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-8\">\r\n            <mat-form-field>\r\n                <mat-label>description:</mat-label> <input matInput type=\"text\" id=\"d\" [(ngModel)]=\"description\">\r\n            </mat-form-field>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-8\">\r\n            <mat-form-field>\r\n                <mat-label>Price: </mat-label><input matInput type=\"text\" id=\"p\" [(ngModel)]=\"Price\">\r\n            </mat-form-field>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-8\">\r\n            <mat-form-field>\r\n                <mat-label>Image:</mat-label><input matInput type=\"text\" id=\"i\" [(ngModel)]=\"Image\">\r\n            </mat-form-field>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-8\">\r\n            <mat-form-field>\r\n                <mat-label>Category:</mat-label><input matInput type=\"text\" id=\"c\" [(ngModel)]=\"Category\">\r\n            </mat-form-field>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"update()\">Submit</button>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-dashboard/user-dashboard.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-dashboard/user-dashboard.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"height: 97% !important;\" *ngIf=\"loaded\">\r\n\r\n    <div class=\"col-lg-12\" style=\"margin-left: 15px !important;margin-right: 15px !important;\">\r\n        <mat-card style=\"height: 100% !important;max-width: 95% !important;\">\r\n            <mat-card style=\"max-width: 95% !important;\">\r\n                <div class=\"row center\">\r\n                    <h1 class=\"center\">\r\n                        Your Account\r\n                    </h1>\r\n\r\n                </div>\r\n                <form [formGroup]=\"Updateform\">\r\n                    <div class=\"row center\">\r\n                        <div class=\"col-lg-4 center\">\r\n                            name:\r\n                            <mat-form-field>\r\n                                <mat-label>{{User.name}}</mat-label><input matInput placeholder=\"your name\"\r\n                                    formControlName=\"username\">\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n                        <div class=\"col-lg-4 center\">\r\n                            email:\r\n                            <mat-form-field>\r\n                                <mat-label>{{User.email}}</mat-label><input matInput placeholder=\"Your Email\"\r\n                                    formControlName=\"email\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-lg-4 center\">\r\n                            <button mat-raised-button color=\"primary\" (click)=\"update()\">Update</button>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </form>\r\n\r\n\r\n\r\n\r\n            </mat-card>\r\n            <mat-card style=\"max-width: 95% !important; margin-top: 15px !important;\">\r\n                <div class=\"row center\">\r\n                    <h1>Upadte Password</h1>\r\n                </div>\r\n                <form [formGroup]=\"UpdatePass\">\r\n                    <div class=\"row center\">\r\n                        <div class=\"col-lg-4 center\">\r\n                           Old password\r\n                            <mat-form-field>\r\n                                <mat-label>Old Password</mat-label><input matInput placeholder=\"****\" type=\"password\"\r\n                                    formControlName=\"oldpassword\">\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n                        <div class=\"col-lg-4 center\">\r\n                            new Passord\r\n                            <mat-form-field>\r\n                                <mat-label>new Passord</mat-label><input matInput placeholder=\"******\"\r\n                                    formControlName=\"newpassword\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-lg-4 center\">\r\n                            <button mat-raised-button color=\"primary\" (click)=\"update_password()\">Update password</button>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </form>\r\n            </mat-card>\r\n\r\n\r\n            <mat-card style=\"max-width: 95% !important; margin-top: 15px !important;\">\r\n                <div class=\"row center\">\r\n                    <h1 class=\"center\">\r\n                        Your Orders\r\n                    </h1>\r\n                </div>\r\n\r\n\r\n                <div class=\"row center\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th scope=\"col\">#</th>\r\n                                <th scope=\"col\">Items</th>\r\n                                <th scope=\"col\">Adress</th>\r\n\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let item of User.orders;let i = index\">\r\n                                <th scope=\"row\">{{i}}</th>\r\n                                <td>\r\n                                    <span *ngFor=\"let name of item.cart;let i = index\">\r\n                                        {{i+1}}.{{name}}<br>\r\n                                    </span>\r\n\r\n                                </td>\r\n                                <td>\r\n                                    {{item.billing.AdressLine1}},<br>\r\n                                    {{item.billing.AdressLine2}},<br>\r\n                                    {{item.billing.AdressLine3}}<br>\r\n\r\n                                </td>\r\n\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                </div>\r\n\r\n\r\n\r\n\r\n            </mat-card>\r\n\r\n\r\n\r\n        </mat-card>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav_button {\n  width: 100%;\n  vertical-align: middle;\n  margin-top: 10%;\n  margin-bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXHBsYWNlbWVudHNcXHNtYXJ0IGVsZWN0cm9uaWNzXFxlY29tbWVyY2VcXGFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2X2J1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgIFxyXG4gICAgXHJcbn0iLCIuc2lkZW5hdl9idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'app';
        this._opened = false;
        this.dock = true;
        this.push = 'push';
        this.configUrl = "https://server17bce0547.herokuapp.com/api/prod";
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.get_products = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(this.configUrl, {}).subscribe(function (data) { console.log("check"); console.log(data); return data; }, function (error) { console.log("Error", error); })];
                    case 1:
                        result = _a.sent();
                        console.log("products from after await", result);
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype._toggleSidebar = function () {
        this._opened = !this._opened;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");























// components








var appRoutes = [
    { path: 'userauth', component: _register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_25__["ProductsComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_26__["CartComponent"] },
    { path: 'dashboard', component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_29__["UserDashboardComponent"] },
    { path: '', component: _products_products_component__WEBPACK_IMPORTED_MODULE_25__["ProductsComponent"] },
    { path: 'upload', component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_30__["UploadComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_28__["HeaderComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_25__["ProductsComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_26__["CartComponent"],
                _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_29__["UserDashboardComponent"],
                _upload_upload_component__WEBPACK_IMPORTED_MODULE_30__["UploadComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"],
                ng_sidebar__WEBPACK_IMPORTED_MODULE_16__["SidebarModule"].forRoot(),
                _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_27__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 75%;\n  vertical-align: middle;\n  margin: auto;\n}\n\n.heigth {\n  height: 100% !important;\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n\n.center {\n  margin: auto;\n  text-align: center;\n  justify-self: center;\n  justify-items: center;\n}\n\nmat-form-field {\n  width: 50% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9GOlxccGxhY2VtZW50c1xcc21hcnQgZWxlY3Ryb25pY3NcXGVjb21tZXJjZVxcYXBwL3NyY1xcYXBwXFxjYXJ0XFxjYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7QUNFSjs7QURDRTtFQUNFLGlCQUFBO0FDRUo7O0FEQUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0dKOztBREFFO0VBQ0UsV0FBQTtBQ0dKOztBREFFO0VBQ0Usa0JBQUE7QUNHSjs7QURERTtFQUNBLFlBQUE7RUFHQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNFRjs7QURBRTtFQUNDLHFCQUFBO0FDR0giLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLmhlaWd0aCB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICB0ci5tYXQtZm9vdGVyLXJvdyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0ZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICAvLyB3aWR0aDogNTAlO1xyXG4gIC8vIHBhZGRpbmc6IDEwcHg7IFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50OyBcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9IiwidGFibGUge1xuICB3aWR0aDogNzUlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5oZWlndGgge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxudHIubWF0LWZvb3Rlci1yb3cge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-data.service */ "./src/app/shared-data.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");







var CartComponent = /** @class */ (function () {
    function CartComponent(share, userservice, _snackBar) {
        var _this = this;
        this.share = share;
        this.userservice = userservice;
        this._snackBar = _snackBar;
        this.Billing = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            AdressLine1: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            AdressLine2: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            AdressLine3: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            State: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            PinCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
        this.states = ["Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chhattisgarh",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jammu and Kashmir",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Odisha",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil Nadu",
            "Telangana",
            "Tripura",
            "Uttarakhand",
            "Uttar Pradesh",
            "West Bengal",
            "Andaman and Nicobar Islands",
            "Chandigarh",
            "Dadra and Nagar Haveli",
            "Daman and Diu",
            "Delhi",
            "Lakshadweep",
            "Puducherry"];
        this.products = [];
        this.trash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrash"];
        this.displayedColumns = ['item', 'cost', 'Quantity', 'Action', 'Price'];
        this.subscription = this.userservice.profile().subscribe(function (data) {
            if (data) {
                _this.products.pop();
                _this.products.push(data.cart);
                _this.total = 0;
                _this.total_items = 0;
                for (var i in _this.products[0]) {
                    _this.total += (_this.products[0][i].quantity * _this.products[0][i].price);
                    _this.total_items += (_this.products[0][i].quantity);
                }
                _this.share.set_cart_total(_this.total_items);
            }
        });
    }
    CartComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CartComponent.prototype.remove_item = function (product) {
        var i = this.products[0].indexOf(product);
        if (this.products[0][i].quantity == 1) {
            this.products[0].splice(i, 1);
        }
        else {
            this.products[0][i].quantity -= 1;
        }
        this.userservice.updatekart(this.products[0]);
    };
    CartComponent.prototype.Billing_ = function () {
        var billing_items = [];
        for (var i in this.products[0]) {
            billing_items.push(this.products[0][i].name);
        }
        if (this.Billing.valid) {
            var data = {
                cart: billing_items,
                billing: this.Billing.value
            };
            this.userservice.send_billing(JSON.stringify(data));
        }
        else {
            this._snackBar.open('Invalid billing details', '', {
                duration: 3000
            });
        }
    };
    CartComponent.ctorParameters = function () { return [
        { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
    ]; };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/cart.component.scss")]
        })
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  height: 60px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Y6XFxwbGFjZW1lbnRzXFxzbWFydCBlbGVjdHJvbmljc1xcZWNvbW1lcmNlXFxhcHAvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IHtcclxuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG59IiwiLm5hdiB7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-data.service */ "./src/app/shared-data.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(UserService, share) {
        var _this = this;
        this.UserService = UserService;
        this.share = share;
        this.Mobile = false;
        this.laptop = false;
        this.desktop = false;
        this.labelPosition = 'after';
        this.user_status = false;
        this.cart_total = 0;
        this.status = this.UserService.user_status().subscribe(function (data) {
            _this.user_status = data;
        });
        this.cart_total_subs = this.share.get_cart_total().subscribe(function (data) {
            _this.cart_total = data;
        });
        this.subscription = this.UserService.profile().subscribe(function (data) {
            if (data) {
                var total_items = 0;
                for (var i in data.cart) {
                    total_items += (data.cart[i].quantity);
                }
                _this.share.set_cart_total(total_items);
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.Logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.UserService.logout();
                return [2 /*return*/];
            });
        });
    };
    HeaderComponent.prototype.changed = function () {
        this.share.set_filter([this.Mobile, this.laptop, this.desktop]);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-product .img-wrap {\n  border-radius: 3px 3px 0 0;\n  overflow: hidden;\n  height: 220px;\n  text-align: center;\n  margin: auto;\n  vertical-align: middle;\n  padding-top: 20%;\n  padding-bottom: 20%;\n}\n\n.card-product .img-wrap img {\n  max-height: 100%;\n  max-width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.card-product .info-wrap {\n  overflow: hidden;\n  padding: 15px;\n  border-top: 1px solid #eee;\n}\n\n.card-product .bottom-wrap {\n  padding: 15px;\n  border-top: 1px solid #eee;\n}\n\n.label-rating {\n  margin-right: 10px;\n  color: #333;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.card-product .price-old {\n  color: #999;\n}\n\n.main-card {\n  margin: auto;\n  margin-top: 25px;\n  margin-bottom: 25px;\n  max-width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvRjpcXHBsYWNlbWVudHNcXHNtYXJ0IGVsZWN0cm9uaWNzXFxlY29tbWVyY2VcXGFwcC9zcmNcXGFwcFxccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLDBCQUFBO0FDR0o7O0FEQUE7RUFBZ0Isa0JBQUE7RUFDWixXQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ0lKOztBRERBO0VBQ0ksV0FBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1wcm9kdWN0IC5pbWctd3JhcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAlO1xyXG59XHJcbi5jYXJkLXByb2R1Y3QgLmltZy13cmFwIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLmNhcmQtcHJvZHVjdCAuaW5mby13cmFwIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuLmNhcmQtcHJvZHVjdCAuYm90dG9tLXdyYXAge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcblxyXG4ubGFiZWwtcmF0aW5nIHsgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5jYXJkLXByb2R1Y3QgLnByaWNlLW9sZCB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxufVxyXG4ubWFpbi1jYXJkIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxufSIsIi5jYXJkLXByb2R1Y3QgLmltZy13cmFwIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMjIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLXRvcDogMjAlO1xuICBwYWRkaW5nLWJvdHRvbTogMjAlO1xufVxuXG4uY2FyZC1wcm9kdWN0IC5pbWctd3JhcCBpbWcge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY2FyZC1wcm9kdWN0IC5pbmZvLXdyYXAge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbn1cblxuLmNhcmQtcHJvZHVjdCAuYm90dG9tLXdyYXAge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbn1cblxuLmxhYmVsLXJhdGluZyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6ICMzMzM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNhcmQtcHJvZHVjdCAucHJpY2Utb2xkIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5tYWluLWNhcmQge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-data.service */ "./src/app/shared-data.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../user.service */ "./src/app/user.service.ts");





var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(httpClient, share, UserService) {
        var _this = this;
        this.httpClient = httpClient;
        this.share = share;
        this.UserService = UserService;
        this.products = [];
        this.kart = [];
        this.auth = false;
        this.filter = [false, false, false];
        this.subscription = this.share.getProducts().subscribe(function (data) {
            if (_this.test(data)) {
                console.log("refresh");
                _this.products.push(data);
            }
        });
        this.usersubs = this.UserService.profile().subscribe(function (product) {
            if (product) {
                _this.kart.pop();
                _this.kart.push(product.cart);
            }
        });
        this.authsubs = this.UserService.user_status().subscribe(function (data) {
            _this.auth = data;
        });
        this.filtersubs = this.share.get_filter().subscribe(function (data) {
            _this.filter = data;
        });
    }
    ProductsComponent.prototype.ngOnInit = function () { };
    ProductsComponent.prototype.addtokart = function (pp) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var product, flag, pro;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        product = {
                            name: pp.name,
                            price: pp.price,
                            quantity: pp.quantity,
                            _id: pp._id
                        };
                        pp.quantity -= 1;
                        flag = false;
                        for (pro in this.kart[0]) {
                            if (this.kart[0][pro]._id == product._id) {
                                this.kart[0][pro].quantity += 1;
                                flag = true;
                            }
                        }
                        if (flag) {
                            this.kart[0].quantity = this.kart[0].quantity + 1;
                        }
                        else {
                            product.quantity = 1;
                            this.kart[0].push(product);
                        }
                        return [4 /*yield*/, this.UserService.updateproductquantity(product)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.UserService.updatekart(this.kart[0])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsComponent.prototype.test = function (data) {
        if (this.filter[0] && this.filter[1] && this.filter[2]) {
            return true;
        }
        if (!this.filter[0] && !this.filter[1] && !this.filter[2]) {
            return true;
        }
        if (data.Category == "M" && this.filter[0]) {
            return true;
        }
        if (data.Category == "L" && this.filter[1]) {
            return true;
        }
        if (data.Category == "D" && this.filter[2]) {
            return true;
        }
        else {
            return false;
        }
    };
    ProductsComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        })
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nmat-form-field {\n  width: 80% !important;\n}\n\nbutton {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRjpcXHBsYWNlbWVudHNcXHNtYXJ0IGVsZWN0cm9uaWNzXFxlY29tbWVyY2VcXGFwcC9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxxQkFBQTtBQ0FKOztBREVBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIFxyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn0iLCIuY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userservice, _snackBar) {
        var _this = this;
        this.userservice = userservice;
        this._snackBar = _snackBar;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.loginform = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.usersubs = this.userservice.profile().subscribe(function (data) {
            if (data) {
                _this.user = data;
            }
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.signup = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.userservice.register(JSON.stringify(this.registerForm.value))
                .subscribe(function (data) { _this._snackBar.open('Account created successfully', '', { duration: 3000 }); }, function (error) { _this._snackBar.open(error, '', { duration: 3000 }); });
        }
        else {
            this._snackBar.open('please enter proper deatils', '', { duration: 3000 });
        }
    };
    RegisterComponent.prototype.login = function () {
        if (this.loginform.valid) {
            this.userservice.login(JSON.stringify(this.loginform.value));
            if (this.user == undefined) {
            }
        }
        else {
            this._snackBar.open('Please entre proper email adress', '', {
                duration: 3000
            });
        }
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('inOutAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: 0, opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: 300, opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: 100, opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.1s linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: 0, opacity: 0 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/shared-data.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared-data.service.ts ***!
  \****************************************/
/*! exports provided: SharedDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDataService", function() { return SharedDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SharedDataService = /** @class */ (function () {
    function SharedDataService(httpClient) {
        this.httpClient = httpClient;
        this.products = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.cart_items_number = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.filter = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.filter.next([false, false, false]);
    }
    SharedDataService.prototype.getProducts = function () {
        var _this = this;
        this.httpClient.post("https://server17bce0547.herokuapp.com/api/prod", '').subscribe(function (data) { _this.products.next(data); }, function (error) { console.log("Error", error); });
        return this.products.asObservable();
    };
    SharedDataService.prototype.updateProducts = function () {
        var _this = this;
        this.httpClient.post("https://server17bce0547.herokuapp.com/api/prod", '').subscribe(function (data) { _this.products.next(data); }, function (error) { console.log("Error", error); });
    };
    SharedDataService.prototype.get_cart_total = function () {
        return this.cart_items_number.asObservable();
    };
    SharedDataService.prototype.set_cart_total = function (number) {
        this.cart_items_number.next(number);
    };
    SharedDataService.prototype.set_filter = function (data) {
        this.filter.next(data);
    };
    SharedDataService.prototype.get_filter = function () {
        return this.filter.asObservable();
    };
    SharedDataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SharedDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SharedDataService);
    return SharedDataService;
}());



/***/ }),

/***/ "./src/app/upload/upload.component.scss":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UploadComponent = /** @class */ (function () {
    function UploadComponent(user, http) {
        this.user = user;
        this.http = http;
    }
    UploadComponent.prototype.ngOnInit = function () { };
    UploadComponent.prototype.update = function () {
        var data = {
            name: this.name,
            id: this.id,
            quantity: this.quantity,
            description: this.description,
            Price: this.Price,
            Image: this.Image,
            Category: this.Category
        };
        this.user.addpro(data);
    };
    UploadComponent.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.scss */ "./src/app/upload/upload.component.scss")]
        })
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-item {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  text-align: center;\n}\n\n.center {\n  margin: auto;\n  text-align: center;\n  justify-self: center;\n  justify-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kYXNoYm9hcmQvRjpcXHBsYWNlbWVudHNcXHNtYXJ0IGVsZWN0cm9uaWNzXFxlY29tbWVyY2VcXGFwcC9zcmNcXGFwcFxcdXNlci1kYXNoYm9hcmRcXHVzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyLWRhc2hib2FyZC91c2VyLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBR0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC91c2VyLWRhc2hib2FyZC91c2VyLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jZW50ZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLy8gd2lkdGg6IDUwJTtcclxuICAgIC8vIHBhZGRpbmc6IDEwcHg7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9IiwiLm1lbnUtaXRlbSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jZW50ZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-data.service */ "./src/app/shared-data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");






var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent(share, userservice, _snackBar) {
        this.share = share;
        this.userservice = userservice;
        this._snackBar = _snackBar;
        this.loaded = false;
        this.displayedColumns = ['item', 'cost', 'Quantity'];
        this.Updateform = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        this.UpdatePass = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            oldpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            newpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userservice.profile().subscribe(function (data) {
            if (data) {
                _this.User = data;
                _this.products = data;
                _this.loaded = true;
            }
        });
    };
    UserDashboardComponent.prototype.update = function () {
        if (this.Updateform.valid) {
            this.userservice.update_user(JSON.stringify(this.Updateform.value));
        }
        else {
            this._snackBar.open('Please entre proper email adress', '', {
                duration: 3000
            });
        }
    };
    UserDashboardComponent.prototype.update_password = function () {
        if (this.UpdatePass.valid) {
            this.userservice.update_password(JSON.stringify(this.UpdatePass.value));
        }
        else {
            this._snackBar.open('Please entre all the recquired fields', '', {
                duration: 3000
            });
        }
    };
    UserDashboardComponent.ctorParameters = function () { return [
        { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    UserDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__(/*! raw-loader!./user-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.scss */ "./src/app/user-dashboard/user-dashboard.component.scss")]
        })
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared-data.service */ "./src/app/shared-data.service.ts");







var UserService = /** @class */ (function () {
    function UserService(SharedDataService, http, _snackBar, router) {
        this.SharedDataService = SharedDataService;
        this.http = http;
        this._snackBar = _snackBar;
        this.router = router;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.profil = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.login_status = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.login_failed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    UserService.prototype.login = function (body) {
        var _this = this;
        this.http.post("https://server17bce0547.herokuapp.com/auth/login", body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('content-Type', 'application/json'), withCredentials: true }).subscribe(function (data) {
            if (data) {
                _this.user.next(data);
                _this.profil.next(data);
                _this.login_status.next(true);
                _this.router.navigate(['/products']);
                _this._snackBar.open('Successfully logined', '', {
                    duration: 3000
                });
            }
        }, function (error) {
            _this._snackBar.open('Please Check Credentials', '', {
                duration: 3000
            });
        });
        return this.user.asObservable();
    };
    UserService.prototype.profile = function () {
        var _this = this;
        this.http.post("https://server17bce0547.herokuapp.com/auth/profile", "", { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('content-Type', 'application/json'), withCredentials: true }).subscribe(function (data) {
            if (data) {
                _this.profil.next(data);
                _this.login_status.next(true);
            }
        }, function (error) {
            if (error.statusText == "Unauthorized") {
            }
        });
        return this.profil.asObservable();
    };
    UserService.prototype.updatekart = function (body) {
        var _this = this;
        console.log("updatekart");
        console.log(body);
        this.http.post("https://server17bce0547.herokuapp.com/auth/updatekart", body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('content-Type', 'application/json'), withCredentials: true }).subscribe(function (data) {
            if (data) {
                _this.profile();
            }
        }, function (error) { });
    };
    UserService.prototype.register = function (body) {
        return this.http.post('https://server17bce0547.herokuapp.com/auth/register', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('content-Type', 'application/json')
        });
    };
    UserService.prototype.getkart = function (body) {
        return this.http.post('https://server17bce0547.herokuapp.com/api/kart', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('content-Type', 'application/json'),
            withCredentials: true
        });
    };
    UserService.prototype.logout = function () {
        var _this = this;
        this.http.post("https://server17bce0547.herokuapp.com/auth/logout", "", { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('content-Type', 'application/json'), withCredentials: true }).subscribe(function (data) {
            if (data) {
                _this.profil.next(null);
                _this.user.next(null);
            }
        }, function (error) { });
        this._snackBar.open('logged out', '', { duration: 3000 });
        this.login_status.next(false);
        this.router.navigate(['/products']);
    };
    UserService.prototype.user_status = function () {
        return this.login_status.asObservable();
    };
    UserService.prototype.send_billing = function (data) {
        var _this = this;
        this.http.post("https://server17bce0547.herokuapp.com/auth/billing", data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('content-Type', 'application/json'), withCredentials: true }).subscribe(function (data) {
            if (data) {
                _this.profile();
                _this._snackBar.open('Order Placed Successfully', '', {
                    duration: 3000
                });
            }
        }, function (error) { });
    };
    UserService.prototype.update_user = function (data) {
        this.http.post("https://server17bce0547.herokuapp.com/auth/UpdateUser", data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('content-Type', 'application/json'), withCredentials: true }).subscribe(function (data) {
            if (data) { }
        }, function (error) { });
        this.logout();
        this._snackBar.open('Succesufully updated, please login again', '', {
            duration: 5000
        });
    };
    UserService.prototype.update_password = function (data) {
        var _this = this;
        this.http.post("https://server17bce0547.herokuapp.com/auth/UpdatePassword", data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('content-Type', 'application/json'), withCredentials: true }).subscribe(function (data) {
            if (data) {
                _this.profile();
                _this._snackBar.open('Updated Successfully, please login again', '', {
                    duration: 5000
                });
            }
        }, function (error) {
            _this.profile();
            _this._snackBar.open('PLease enter rigth old password', '', {
                duration: 3000
            });
        });
        this.logout();
    };
    UserService.prototype.addpro = function (data) {
        this.http.post("https://server17bce0547.herokuapp.com/api/addproduct", data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('content-Type', 'application/json') }).subscribe(function (data) { console.log("data sent"); });
    };
    UserService.prototype.updateproductquantity = function (data) {
        var _this = this;
        this.http.post("https://server17bce0547.herokuapp.com/auth/Updateproductquantity", data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('content-Type', 'application/json'), withCredentials: true }).subscribe(function (data) {
            if (data) {
                _this.profile();
                _this.SharedDataService.updateProducts();
            }
        }, function (error) { });
    };
    UserService.ctorParameters = function () { return [
        { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\placements\smart electronics\ecommerce\app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map