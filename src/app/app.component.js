"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t\t\t<!--nav class=\"navbar navbar-inverse navbar-fixed-top\">\n\t\t\t  <div class=\"container-fluid\">\n\t\t\t    <div class=\"navbar-header\" style=\"text-align: center;\">\n\t\t\t      <span class=\"navbar-brand\">Online Products Store</span>\n\t\t\t\t\t<ul style=\"float: right; list-display-style: none;\">\n\t\t\t\t    \t<li><a routerLink=\"/\">Home</a></li>\n\t\t    \t\t\t<li><a routerLink=\"/electronics\">Electronics Store</a></li>\n\t\t    \t\t\t<li><a routerLink=\"/clothes\">Electronics Inventory</a></li>\n\t\t    \t\t\t<li><a routerLink=\"/shoes\">Shoes Inventory</a></li>\n\t\t    \t\t\t<li><a routerLink=\"/books\">Books Inventory</a></li>\n\t\t    \t\t</ul>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t</nav-->\n\t\t  \t<router-outlet></router-outlet>\n\t\t"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map