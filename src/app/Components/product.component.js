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
var ProductComponent = (function () {
    function ProductComponent() {
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
        this.books1 = {
            id: 18,
            productName: 'High Powered Investing for Dummies',
            productType: 'Educational',
            brand: 'Charles Kent',
            price: 1400,
            show: false
        };
        this.books2 = {
            id: 19,
            productName: 'The Whistler',
            productType: 'Novel',
            brand: 'John Grisham',
            price: 1900,
            show: false
        };
        this.books3 = {
            id: 20,
            productName: 'Contrarians Guide to Leadership',
            productType: 'Educational',
            brand: 'Roland Emmerich',
            price: 2400,
            show: false
        };
        this.books4 = {
            id: 21,
            productName: 'Creating Motion Graphics with After Effects',
            productType: 'Educational',
            brand: 'Lisa Hammond',
            price: 3200,
            show: true
        };
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
    ProductComponent.prototype.toggleElec = function () {
        if (this.showElectronics == true) {
            this.showElectronics = false;
        }
        else {
            this.showElectronics = true;
        }
    };
    ProductComponent.prototype.toggleTV = function () {
        if (this.showTV == true) {
            this.showTV = false;
        }
        else {
            this.showTV = true;
        }
    };
    ProductComponent.prototype.toggleMobile = function () {
        if (this.showMobile == true) {
            this.showMobile = false;
        }
        else {
            this.showMobile = true;
        }
    };
    ProductComponent.prototype.toggleShirt = function () {
        if (this.showShirt == true) {
            this.showShirt = false;
        }
        else {
            this.showShirt = true;
        }
    };
    ProductComponent.prototype.toggleTshirt = function () {
        if (this.showTshirt == true) {
            this.showTshirt = false;
        }
        else {
            this.showTshirt = true;
        }
    };
    ProductComponent.prototype.togglePants = function () {
        if (this.showPants == true) {
            this.showPants = false;
        }
        else {
            this.showPants = true;
        }
    };
    ProductComponent.prototype.toggleClothes = function () {
        if (this.showClothes == true) {
            this.showClothes = false;
        }
        else {
            this.showClothes = true;
        }
    };
    ProductComponent.prototype.toggleShoes = function () {
        if (this.showShoes == true) {
            this.showShoes = false;
        }
        else {
            this.showShoes = true;
        }
    };
    ProductComponent.prototype.toggleBooks = function () {
        if (this.showBooks == true) {
            this.showBooks = false;
        }
        else {
            this.showBooks = true;
        }
    };
    ProductComponent.prototype.toggleData = function () {
        if (this.showData == true) {
            this.showData = false;
        }
        else {
            this.showData = true;
        }
    };
    ProductComponent.prototype.showTV1 = function () {
        if (this.tv1.show == true) {
            this.tv1.show = false;
        }
        else {
            this.tv1.show = true;
        }
    };
    ProductComponent.prototype.showTV2 = function () {
        if (this.tv2.show == true) {
            this.tv2.show = false;
        }
        else {
            this.tv2.show = true;
        }
    };
    ProductComponent.prototype.showTV3 = function () {
        if (this.tv3.show == true) {
            this.tv3.show = false;
        }
        else {
            this.tv3.show = true;
        }
    };
    ProductComponent.prototype.showTV4 = function () {
        if (this.tv4.show == true) {
            this.tv4.show = false;
        }
        else {
            this.tv4.show = true;
        }
    };
    ProductComponent.prototype.showMobile1 = function () {
        if (this.mobile1.show == true) {
            this.mobile1.show = false;
        }
        else {
            this.mobile1.show = true;
        }
    };
    ProductComponent.prototype.showMobile2 = function () {
        if (this.mobile2.show == true) {
            this.mobile2.show = false;
        }
        else {
            this.mobile2.show = true;
        }
    };
    ProductComponent.prototype.showMobile3 = function () {
        if (this.mobile3.show == true) {
            this.mobile3.show = false;
        }
        else {
            this.mobile3.show = true;
        }
    };
    ProductComponent.prototype.showMobile4 = function () {
        if (this.mobile4.show == true) {
            this.mobile4.show = false;
        }
        else {
            this.mobile4.show = true;
        }
    };
    ProductComponent.prototype.showShirt1 = function () {
        if (this.shirt1.show == true) {
            this.shirt1.show = false;
        }
        else {
            this.shirt1.show = true;
        }
    };
    ProductComponent.prototype.showShirt2 = function () {
        if (this.shirt2.show == true) {
            this.shirt2.show = false;
        }
        else {
            this.shirt2.show = true;
        }
    };
    ProductComponent.prototype.showShirt3 = function () {
        if (this.shirt3.show == true) {
            this.shirt3.show = false;
        }
        else {
            this.shirt3.show = true;
        }
    };
    ProductComponent.prototype.showTshirt1 = function () {
        if (this.tshirt1.show == true) {
            this.tshirt1.show = false;
        }
        else {
            this.tshirt1.show = true;
        }
    };
    ProductComponent.prototype.showTshirt2 = function () {
        if (this.tshirt2.show == true) {
            this.tshirt2.show = false;
        }
        else {
            this.tshirt2.show = true;
        }
    };
    ProductComponent.prototype.showTshirt3 = function () {
        if (this.tshirt3.show == true) {
            this.tshirt3.show = false;
        }
        else {
            this.tshirt3.show = true;
        }
    };
    ProductComponent.prototype.showPants1 = function () {
        if (this.pants1.show == true) {
            this.pants1.show = false;
        }
        else {
            this.pants1.show = true;
        }
    };
    ProductComponent.prototype.showPants2 = function () {
        if (this.pants2.show == true) {
            this.pants2.show = false;
        }
        else {
            this.pants2.show = true;
        }
    };
    ProductComponent.prototype.showPants3 = function () {
        if (this.pants3.show == true) {
            this.pants3.show = false;
        }
        else {
            this.pants3.show = true;
        }
    };
    ProductComponent.prototype.showShoes1 = function () {
        if (this.shoes1.show == true) {
            this.shoes1.show = false;
        }
        else {
            this.shoes1.show = true;
        }
    };
    ProductComponent.prototype.showShoes2 = function () {
        if (this.shoes2.show == true) {
            this.shoes2.show = false;
        }
        else {
            this.shoes2.show = true;
        }
    };
    ProductComponent.prototype.showShoes3 = function () {
        if (this.shoes3.show == true) {
            this.shoes3.show = false;
        }
        else {
            this.shoes3.show = true;
        }
    };
    ProductComponent.prototype.showShoes4 = function () {
        if (this.shoes4.show == true) {
            this.shoes4.show = false;
        }
        else {
            this.shoes4.show = true;
        }
    };
    ProductComponent.prototype.showShoes5 = function () {
        if (this.shoes5.show == true) {
            this.shoes5.show = false;
        }
        else {
            this.shoes5.show = true;
        }
    };
    ProductComponent.prototype.showBooks1 = function () {
        if (this.books1.show == true) {
            this.books1.show = false;
        }
        else {
            this.books1.show = true;
        }
    };
    ProductComponent.prototype.showBooks2 = function () {
        if (this.books2.show == true) {
            this.books2.show = false;
        }
        else {
            this.books2.show = true;
        }
    };
    ProductComponent.prototype.showBooks3 = function () {
        if (this.books3.show == true) {
            this.books3.show = false;
        }
        else {
            this.books3.show = true;
        }
    };
    ProductComponent.prototype.showBooks4 = function () {
        if (this.books4.show == true) {
            this.books4.show = false;
        }
        else {
            this.books4.show = true;
        }
    };
    ProductComponent.prototype.showBooks5 = function () {
        if (this.books5.show == true) {
            this.books5.show = false;
        }
        else {
            this.books5.show = true;
        }
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'product',
        templateUrl: 'product.component.html'
    }),
    __metadata("design:paramtypes", [])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map