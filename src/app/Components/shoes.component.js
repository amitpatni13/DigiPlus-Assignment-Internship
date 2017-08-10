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
var ShoesComponent = (function () {
    function ShoesComponent() {
        this.shoes1 = {
            id: 23,
            productName: 'Bata Leather Shoes A10',
            productType: 'Shoes',
            brand: 'Bata',
            price: 3500,
            show: false
        };
        this.shoes2 = {
            id: 24,
            productName: 'Smartpace Parywear Shoes A8',
            productType: 'Shoes',
            brand: 'SmartPace',
            price: 2500,
            show: false
        };
        this.shoes3 = {
            id: 25,
            productName: 'Woodland Leather Shoes A12',
            productType: 'Shoes',
            brand: 'Woodland',
            price: 1500,
            show: false
        };
        this.shoes4 = {
            id: 26,
            productName: 'Nike Sportswear Shoes A11',
            productType: 'Shoes',
            brand: 'Nike',
            price: 4900,
            show: true
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
    ShoesComponent.prototype.toggleElec = function () {
        if (this.showElectronics == true) {
            this.showElectronics = false;
        }
        else {
            this.showElectronics = true;
        }
    };
    ShoesComponent.prototype.toggleTV = function () {
        if (this.showTV == true) {
            this.showTV = false;
        }
        else {
            this.showTV = true;
        }
    };
    ShoesComponent.prototype.toggleMobile = function () {
        if (this.showMobile == true) {
            this.showMobile = false;
        }
        else {
            this.showMobile = true;
        }
    };
    ShoesComponent.prototype.toggleShirt = function () {
        if (this.showShirt == true) {
            this.showShirt = false;
        }
        else {
            this.showShirt = true;
        }
    };
    ShoesComponent.prototype.toggleTshirt = function () {
        if (this.showTshirt == true) {
            this.showTshirt = false;
        }
        else {
            this.showTshirt = true;
        }
    };
    ShoesComponent.prototype.togglePants = function () {
        if (this.showPants == true) {
            this.showPants = false;
        }
        else {
            this.showPants = true;
        }
    };
    ShoesComponent.prototype.toggleClothes = function () {
        if (this.showClothes == true) {
            this.showClothes = false;
        }
        else {
            this.showClothes = true;
        }
    };
    ShoesComponent.prototype.toggleShoes = function () {
        if (this.showShoes == true) {
            this.showShoes = false;
        }
        else {
            this.showShoes = true;
        }
    };
    ShoesComponent.prototype.toggleBooks = function () {
        if (this.showBooks == true) {
            this.showBooks = false;
        }
        else {
            this.showBooks = true;
        }
    };
    ShoesComponent.prototype.toggleData = function () {
        if (this.showData == true) {
            this.showData = false;
        }
        else {
            this.showData = true;
        }
    };
    ShoesComponent.prototype.showShoes1 = function () {
        if (this.shoes1.show == true) {
            this.shoes1.show = false;
        }
        else {
            this.shoes1.show = true;
        }
    };
    ShoesComponent.prototype.showShoes2 = function () {
        if (this.shoes2.show == true) {
            this.shoes2.show = false;
        }
        else {
            this.shoes2.show = true;
        }
    };
    ShoesComponent.prototype.showShoes3 = function () {
        if (this.shoes3.show == true) {
            this.shoes3.show = false;
        }
        else {
            this.shoes3.show = true;
        }
    };
    ShoesComponent.prototype.showShoes4 = function () {
        if (this.shoes4.show == true) {
            this.shoes4.show = false;
        }
        else {
            this.shoes4.show = true;
        }
    };
    ShoesComponent.prototype.showShoes5 = function () {
        if (this.shoes5.show == true) {
            this.shoes5.show = false;
        }
        else {
            this.shoes5.show = true;
        }
    };
    return ShoesComponent;
}());
ShoesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'shoes',
        templateUrl: 'shoes.component.html'
    }),
    __metadata("design:paramtypes", [])
], ShoesComponent);
exports.ShoesComponent = ShoesComponent;
//# sourceMappingURL=shoes.component.js.map