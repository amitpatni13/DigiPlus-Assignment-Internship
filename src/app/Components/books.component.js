"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var BooksComponent = (function () {
    function BooksComponent() {
        this.books1 = {
            id: 18,
            productName: 'High Powered Investing for Dummies',
            productType: 'Educational',
            author: 'Charles Kent',
            price: 1400,
            show: false
        };
        this.books2 = {
            id: 19,
            productName: 'The Whistler',
            productType: 'Novel',
            author: 'John Grisham',
            price: 1900,
            show: false
        };
        this.books3 = {
            id: 20,
            productName: 'Contrarians Guide to Leadership',
            productType: 'Educational',
            author: 'Roland Emmerich',
            price: 2400,
            show: false
        };
        this.books4 = {
            id: 21,
            productName: 'Creating Motion Graphics with After Effects',
            productType: 'Educational',
            author: 'Lisa Hammond',
            price: 3200,
            show: true
        };
        this.books5 = {
            id: 22,
            productName: 'Book5',
            productType: 'Educational',
            author: 'author5',
            price: 1000,
            show: false
        };
        this.showData = false;
        this.showElectronics = false;
        this.showClothes = false;
        this.showBooks = false;
        this.showShoes = false;
        this.showTV = false;
        this.showMobile = false;
        this.showTshirt = false;
        this.showShirt = false;
        this.showPants = false;
    }
    BooksComponent.prototype.toggleElec = function () {
        if (this.showElectronics == true) {
            this.showElectronics = false;
        }
        else {
            this.showElectronics = true;
        }
    };
    BooksComponent.prototype.toggleTV = function () {
        if (this.showTV == true) {
            this.showTV = false;
        }
        else {
            this.showTV = true;
        }
    };
    BooksComponent.prototype.toggleMobile = function () {
        if (this.showMobile == true) {
            this.showMobile = false;
        }
        else {
            this.showMobile = true;
        }
    };
    BooksComponent.prototype.toggleShirt = function () {
        if (this.showShirt == true) {
            this.showShirt = false;
        }
        else {
            this.showShirt = true;
        }
    };
    BooksComponent.prototype.toggleTshirt = function () {
        if (this.showTshirt == true) {
            this.showTshirt = false;
        }
        else {
            this.showTshirt = true;
        }
    };
    BooksComponent.prototype.togglePants = function () {
        if (this.showPants == true) {
            this.showPants = false;
        }
        else {
            this.showPants = true;
        }
    };
    BooksComponent.prototype.toggleClothes = function () {
        if (this.showClothes == true) {
            this.showClothes = false;
        }
        else {
            this.showClothes = true;
        }
    };
    BooksComponent.prototype.toggleShoes = function () {
        if (this.showShoes == true) {
            this.showShoes = false;
        }
        else {
            this.showShoes = true;
        }
    };
    BooksComponent.prototype.toggleBooks = function () {
        if (this.showBooks == true) {
            this.showBooks = false;
        }
        else {
            this.showBooks = true;
        }
    };
    BooksComponent.prototype.toggleData = function () {
        if (this.showData == true) {
            this.showData = false;
        }
        else {
            this.showData = true;
        }
    };
    BooksComponent.prototype.showBooks1 = function () {
        if (this.books1.show == true) {
            this.books1.show = false;
        }
        else {
            this.books1.show = true;
        }
    };
    BooksComponent.prototype.showBooks2 = function () {
        if (this.books2.show == true) {
            this.books2.show = false;
        }
        else {
            this.books2.show = true;
        }
    };
    BooksComponent.prototype.showBooks3 = function () {
        if (this.books3.show == true) {
            this.books3.show = false;
        }
        else {
            this.books3.show = true;
        }
    };
    BooksComponent.prototype.showBooks4 = function () {
        if (this.books4.show == true) {
            this.books4.show = false;
        }
        else {
            this.books4.show = true;
        }
    };
    BooksComponent.prototype.showBooks5 = function () {
        if (this.books5.show == true) {
            this.books5.show = false;
        }
        else {
            this.books5.show = true;
        }
    };
    return BooksComponent;
}());
BooksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'books',
        templateUrl: 'books.component.html',
    }),
    __metadata("design:paramtypes", [])
], BooksComponent);
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=books.component.js.map