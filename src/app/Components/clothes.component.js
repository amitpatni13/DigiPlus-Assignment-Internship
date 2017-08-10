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
var ClothesComponent = (function () {
    function ClothesComponent() {
        this.shirt1 = {
            id: 9,
            productName: 'Dotted Shirt Formal',
            productType: 'Men Clothes',
            brand: 'Klub Fox',
            price: 500,
            show: false
        };
        this.shirt2 = {
            id: 10,
            productName: 'Plain Shirt Partywear',
            productType: 'Men Clothes',
            brand: 'Raymonds',
            price: 1100,
            show: false
        };
        this.shirt3 = {
            id: 11,
            productName: 'Chequed Shirt Casualwear',
            productType: 'Men Clothes',
            brand: 'Peter England',
            price: 900,
            show: true
        };
        this.tshirt1 = {
            id: 12,
            productName: 'Round Neck T-Shirt Blue',
            productType: 'Men Clothes',
            brand: 'Klub Fox',
            price: 500,
            show: false
        };
        this.tshirt2 = {
            id: 13,
            productName: 'Round Neck T-Shirt Black',
            productType: 'Men Clothes',
            brand: 'FBB',
            price: 1100,
            show: false
        };
        this.tshirt3 = {
            id: 14,
            productName: 'Round Neck T-Shirt Red',
            productType: 'Men Clothes',
            brand: 'Brand3',
            price: 900,
            show: true
        };
        this.pants1 = {
            id: 15,
            productName: 'Grey Pants',
            productType: 'Pants',
            brand: 'Killer',
            price: 1050,
            show: false
        };
        this.pants2 = {
            id: 16,
            productName: 'Brown Pants',
            productType: 'Pants',
            brand: 'FBB',
            price: 1250,
            show: false
        };
        this.pants3 = {
            id: 17,
            productName: 'Silver Pants',
            productType: 'Pants',
            brand: 'Klub Fox',
            price: 1900,
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
    ClothesComponent.prototype.toggleElec = function () {
        if (this.showElectronics == true) {
            this.showElectronics = false;
        }
        else {
            this.showElectronics = true;
        }
    };
    ClothesComponent.prototype.toggleTV = function () {
        if (this.showTV == true) {
            this.showTV = false;
        }
        else {
            this.showTV = true;
        }
    };
    ClothesComponent.prototype.toggleMobile = function () {
        if (this.showMobile == true) {
            this.showMobile = false;
        }
        else {
            this.showMobile = true;
        }
    };
    ClothesComponent.prototype.toggleShirt = function () {
        if (this.showShirt == true) {
            this.showShirt = false;
        }
        else {
            this.showShirt = true;
        }
    };
    ClothesComponent.prototype.toggleTshirt = function () {
        if (this.showTshirt == true) {
            this.showTshirt = false;
        }
        else {
            this.showTshirt = true;
        }
    };
    ClothesComponent.prototype.togglePants = function () {
        if (this.showPants == true) {
            this.showPants = false;
        }
        else {
            this.showPants = true;
        }
    };
    ClothesComponent.prototype.toggleClothes = function () {
        if (this.showClothes == true) {
            this.showClothes = false;
        }
        else {
            this.showClothes = true;
        }
    };
    ClothesComponent.prototype.toggleShoes = function () {
        if (this.showShoes == true) {
            this.showShoes = false;
        }
        else {
            this.showShoes = true;
        }
    };
    ClothesComponent.prototype.toggleBooks = function () {
        if (this.showBooks == true) {
            this.showBooks = false;
        }
        else {
            this.showBooks = true;
        }
    };
    ClothesComponent.prototype.toggleData = function () {
        if (this.showData == true) {
            this.showData = false;
        }
        else {
            this.showData = true;
        }
    };
    ClothesComponent.prototype.showShirt1 = function () {
        if (this.shirt1.show == true) {
            this.shirt1.show = false;
        }
        else {
            this.shirt1.show = true;
        }
    };
    ClothesComponent.prototype.showShirt2 = function () {
        if (this.shirt2.show == true) {
            this.shirt2.show = false;
        }
        else {
            this.shirt2.show = true;
        }
    };
    ClothesComponent.prototype.showShirt3 = function () {
        if (this.shirt3.show == true) {
            this.shirt3.show = false;
        }
        else {
            this.shirt3.show = true;
        }
    };
    ClothesComponent.prototype.showTshirt1 = function () {
        if (this.tshirt1.show == true) {
            this.tshirt1.show = false;
        }
        else {
            this.tshirt1.show = true;
        }
    };
    ClothesComponent.prototype.showTshirt2 = function () {
        if (this.tshirt2.show == true) {
            this.tshirt2.show = false;
        }
        else {
            this.tshirt2.show = true;
        }
    };
    ClothesComponent.prototype.showTshirt3 = function () {
        if (this.tshirt3.show == true) {
            this.tshirt3.show = false;
        }
        else {
            this.tshirt3.show = true;
        }
    };
    ClothesComponent.prototype.showPants1 = function () {
        if (this.pants1.show == true) {
            this.pants1.show = false;
        }
        else {
            this.pants1.show = true;
        }
    };
    ClothesComponent.prototype.showPants2 = function () {
        if (this.pants2.show == true) {
            this.pants2.show = false;
        }
        else {
            this.pants2.show = true;
        }
    };
    ClothesComponent.prototype.showPants3 = function () {
        if (this.pants3.show == true) {
            this.pants3.show = false;
        }
        else {
            this.pants3.show = true;
        }
    };
    return ClothesComponent;
}());
ClothesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'clothes',
        templateUrl: 'clothes.component.html'
    }),
    __metadata("design:paramtypes", [])
], ClothesComponent);
exports.ClothesComponent = ClothesComponent;
//# sourceMappingURL=clothes.component.js.map