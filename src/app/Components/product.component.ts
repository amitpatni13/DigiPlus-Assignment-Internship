import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'product',
  templateUrl: 'product.component.html'
})
export class ProductComponent { 
	tv1: product;
	tv2: product;
	tv3: product;
	tv4: product;
	mobile1: product;
	mobile2: product;
	mobile3: product;
	mobile4: product;
	shirt1: product;
	shirt2: product;
	shirt3: product;
	tshirt1: product;
	tshirt2: product;
	tshirt3: product;
	pants1: product;
	pants2: product;
	pants3: product;
	books1: product;
	books2: product;
	books3: product;
	books4: product;
	books5: product;
	shoes1: product;
	shoes2: product;
	shoes3: product;
	shoes4: product;
	shoes5: product; 
	showData: boolean;
	showElectronics: boolean;
	showClothes: boolean;
	showShoes: boolean;
	showBooks: boolean;
	showTV: boolean;
	showMobile: boolean;
	showShirt: boolean;
	showPants: boolean;
	showTshirt: boolean;

	constructor(){

		
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
		};this.shirt1 = {
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
		}
		this.shoes2 = {
			id: 24,
			productName: 'Smartpace Parywear Shoes A8',
			productType: 'Shoes',
			brand: 'SmartPace',
			price: 2500,
			show: false
		}
		this.shoes3 = {
			id: 25,
			productName: 'Woodland Leather Shoes A12',
			productType: 'Shoes',
			brand: 'Woodland',
			price: 1500,
			show: false
		}
		this.shoes4 = {
			id: 26,
			productName: 'Nike Sportswear Shoes A11',
			productType: 'Shoes',
			brand: 'Nike',
			price: 4900,
			show: false
		}

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
	toggleElec(){
		if(this.showElectronics == true){
			this.showElectronics = false;
		}
		else{
			this.showElectronics = true;
		}
	}
	toggleTV(){
		if(this.showTV == true){
			this.showTV = false;
		}
		else{
			this.showTV = true;
		}
	}
	toggleMobile(){
		if(this.showMobile == true){
			this.showMobile = false;
		}
		else{
			this.showMobile = true;
		}
	}
	toggleShirt(){
		if(this.showShirt == true){
			this.showShirt = false;
		}
		else{
			this.showShirt = true;
		}
	}
	toggleTshirt(){
		if(this.showTshirt == true){
			this.showTshirt = false;
		}
		else{
			this.showTshirt = true;
		}
	}
	togglePants(){
		if(this.showPants == true){
			this.showPants = false;
		}
		else{
			this.showPants = true;
		}
	}

	toggleClothes(){
		if(this.showClothes == true){
			this.showClothes = false;
		}
		else{
			this.showClothes = true;
		}
	}
	toggleShoes(){
		if(this.showShoes == true){
			this.showShoes = false;
		}
		else{
			this.showShoes = true;
		}
	}
	toggleBooks(){
		if(this.showBooks == true){
			this.showBooks = false;
		}
		else{
			this.showBooks = true;
		}
	}
	toggleData(){
		if(this.showData == true){
			this.showData = false;
		}
		else{
			this.showData = true;
		}
	}
	showTV1(){
		if(this.tv1.show == true){
			this.tv1.show = false;
		}
		else{
			this.tv1.show = true;
		}
	}
	showTV2(){
		if(this.tv2.show == true){
			this.tv2.show = false;
		}
		else{
			this.tv2.show = true;
		}
	}
	showTV3(){
		if(this.tv3.show == true){
			this.tv3.show = false;
		}
		else{
			this.tv3.show = true;
		}
	}
	showTV4(){
		if(this.tv4.show == true){
			this.tv4.show = false;
		}
		else{
			this.tv4.show = true;
		}
	}
	showMobile1(){
		if(this.mobile1.show == true){
			this.mobile1.show = false;
		}
		else{
			this.mobile1.show = true;
		}
	}
	showMobile2(){
		if(this.mobile2.show == true){
			this.mobile2.show = false;
		}
		else{
			this.mobile2.show = true;
		}
	}
	showMobile3(){
		if(this.mobile3.show == true){
			this.mobile3.show = false;
		}
		else{
			this.mobile3.show = true;
		}
	}
	showMobile4(){
		if(this.mobile4.show == true){
			this.mobile4.show = false;
		}
		else{
			this.mobile4.show = true;
		}
	}
	showShirt1(){
		if(this.shirt1.show == true){
			this.shirt1.show = false;
		}
		else{
			this.shirt1.show = true;
		}
	}
	showShirt2(){
		if(this.shirt2.show == true){
			this.shirt2.show = false;
		}
		else{
			this.shirt2.show = true;
		}
	}
	showShirt3(){
		if(this.shirt3.show == true){
			this.shirt3.show = false;
		}
		else{
			this.shirt3.show = true;
		}
	}
	showTshirt1(){
		if(this.tshirt1.show == true){
			this.tshirt1.show = false;
		}
		else{
			this.tshirt1.show = true;
		}
	}
	showTshirt2(){
		if(this.tshirt2.show == true){
			this.tshirt2.show = false;
		}
		else{
			this.tshirt2.show = true;
		}
	}
	showTshirt3(){
		if(this.tshirt3.show == true){
			this.tshirt3.show = false;
		}
		else{
			this.tshirt3.show = true;
		}
	}
	showPants1(){
		if(this.pants1.show == true){
			this.pants1.show = false;
		}
		else{
			this.pants1.show = true;
		}
	}
	showPants2(){
		if(this.pants2.show == true){
			this.pants2.show = false;
		}
		else{
			this.pants2.show = true;
		}
	}
	showPants3(){
		if(this.pants3.show == true){
			this.pants3.show = false;
		}
		else{
			this.pants3.show = true;
		}
	}
	showShoes1(){
		if(this.shoes1.show == true){
			this.shoes1.show = false;
		}
		else{
			this.shoes1.show = true;
		}
	}
	showShoes2(){
		if(this.shoes2.show == true){
			this.shoes2.show = false;
		}
		else{
			this.shoes2.show = true;
		}
	}
	showShoes3(){
		if(this.shoes3.show == true){
			this.shoes3.show = false;
		}
		else{
			this.shoes3.show = true;
		}
	}
	showShoes4(){
		if(this.shoes4.show == true){
			this.shoes4.show = false;
		}
		else{
			this.shoes4.show = true;
		}
	}
	showShoes5(){
		if(this.shoes5.show == true){
			this.shoes5.show = false;
		}
		else{
			this.shoes5.show = true;
		}
	}
	showBooks1(){
		if(this.books1.show == true){
			this.books1.show = false;
		}
		else{
			this.books1.show = true;
		}
	}
	showBooks2(){
		if(this.books2.show == true){
			this.books2.show = false;
		}
		else{
			this.books2.show = true;
		}
	}
	showBooks3(){
		if(this.books3.show == true){
			this.books3.show = false;
		}
		else{
			this.books3.show = true;
		}
	}
	showBooks4(){
		if(this.books4.show == true){
			this.books4.show = false;
		}
		else{
			this.books4.show = true;
		}
	}
	showBooks5(){
		if(this.books5.show == true){
			this.books5.show = false;
		}
		else{
			this.books5.show = true;
		}
	}

}

interface product {
	id: number;
	productName: string;
	productType: string;
	brand: string;
	price: number;
	show: boolean;
}
