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
var ElectronicsComponent = (function () {
    function ElectronicsComponent() {
        this.tv1 = {
            id: 1,
            productName: 'LED TV Full HD 1080p',
            productType: 'Television',
            brand: 'Huawei',
            price: 45000,
            show: false
        };
        this.tv2 = {
            id: 2,
            productName: 'LG Bravia HDTV 1080p',
            productType: 'Television',
            brand: 'LG',
            price: 28000,
            show: false
        };
        this.tv3 = {
            id: 3,
            productName: 'Flat Screen Full HD TV',
            productType: 'Television',
            brand: 'Samsung',
            price: 56000,
            show: false
        };
        this.tv4 = {
            id: 4,
            productName: 'Smart TV Full hd 720p',
            productType: 'Television',
            brand: 'Sansui',
            price: 40000,
            show: true
        };
        this.mobile1 = {
            id: 5,
            productName: 'Moto 3G',
            productType: 'Mobile',
            brand: 'Motorola',
            price: 15000,
            show: false
        };
        this.mobile2 = {
            id: 6,
            productName: 'Blackberry ES200',
            productType: 'Mobile',
            brand: 'Blackberry',
            price: 25000,
            show: false
        };
        this.mobile3 = {
            id: 7,
            productName: 'I-Phone 6S',
            productType: 'Mobile',
            brand: 'Apple',
            price: 58000,
            show: false
        };
        this.mobile4 = {
            id: 8,
            productName: 'Samsung Galaxy J6',
            productType: 'Mobile',
            brand: 'Samsung',
            price: 23000,
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
    ElectronicsComponent.prototype.toggleElec = function () {
        if (this.showElectronics == true) {
            this.showElectronics = false;
        }
        else {
            this.showElectronics = true;
        }
    };
    ElectronicsComponent.prototype.toggleTV = function () {
        if (this.showTV == true) {
            this.showTV = false;
        }
        else {
            this.showTV = true;
        }
    };
    ElectronicsComponent.prototype.toggleMobile = function () {
        if (this.showMobile == true) {
            this.showMobile = false;
        }
        else {
            this.showMobile = true;
        }
    };
    ElectronicsComponent.prototype.toggleShirt = function () {
        if (this.showShirt == true) {
            this.showShirt = false;
        }
        else {
            this.showShirt = true;
        }
    };
    ElectronicsComponent.prototype.toggleTshirt = function () {
        if (this.showTshirt == true) {
            this.showTshirt = false;
        }
        else {
            this.showTshirt = true;
        }
    };
    ElectronicsComponent.prototype.togglePants = function () {
        if (this.showPants == true) {
            this.showPants = false;
        }
        else {
            this.showPants = true;
        }
    };
    ElectronicsComponent.prototype.toggleClothes = function () {
        if (this.showClothes == true) {
            this.showClothes = false;
        }
        else {
            this.showClothes = true;
        }
    };
    ElectronicsComponent.prototype.toggleShoes = function () {
        if (this.showShoes == true) {
            this.showShoes = false;
        }
        else {
            this.showShoes = true;
        }
    };
    ElectronicsComponent.prototype.toggleBooks = function () {
        if (this.showBooks == true) {
            this.showBooks = false;
        }
        else {
            this.showBooks = true;
        }
    };
    ElectronicsComponent.prototype.toggleData = function () {
        if (this.showData == true) {
            this.showData = false;
        }
        else {
            this.showData = true;
        }
    };
    ElectronicsComponent.prototype.showTV1 = function () {
        if (this.tv1.show == true) {
            this.tv1.show = false;
        }
        else {
            this.tv1.show = true;
        }
    };
    ElectronicsComponent.prototype.showTV2 = function () {
        if (this.tv2.show == true) {
            this.tv2.show = false;
        }
        else {
            this.tv2.show = true;
        }
    };
    ElectronicsComponent.prototype.showTV3 = function () {
        if (this.tv3.show == true) {
            this.tv3.show = false;
        }
        else {
            this.tv3.show = true;
        }
    };
    ElectronicsComponent.prototype.showTV4 = function () {
        if (this.tv4.show == true) {
            this.tv4.show = false;
        }
        else {
            this.tv4.show = true;
        }
    };
    ElectronicsComponent.prototype.showMobile1 = function () {
        if (this.mobile1.show == true) {
            this.mobile1.show = false;
        }
        else {
            this.mobile1.show = true;
        }
    };
    ElectronicsComponent.prototype.showMobile2 = function () {
        if (this.mobile2.show == true) {
            this.mobile2.show = false;
        }
        else {
            this.mobile2.show = true;
        }
    };
    ElectronicsComponent.prototype.showMobile3 = function () {
        if (this.mobile3.show == true) {
            this.mobile3.show = false;
        }
        else {
            this.mobile3.show = true;
        }
    };
    ElectronicsComponent.prototype.showMobile4 = function () {
        if (this.mobile4.show == true) {
            this.mobile4.show = false;
        }
        else {
            this.mobile4.show = true;
        }
    };
    return ElectronicsComponent;
}());
ElectronicsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'electronics',
        templateUrl: 'electronics.component.html'
    }),
    __metadata("design:paramtypes", [])
], ElectronicsComponent);
exports.ElectronicsComponent = ElectronicsComponent;
//# sourceMappingURL=electronics.component.js.map