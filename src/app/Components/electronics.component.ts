import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'electronics',
  templateUrl: 'electronics.component.html'
})
export class ElectronicsComponent { 
	tv1: product;
	tv2: product;
	tv3: product;
	tv4: product;
	mobile1: product;
	mobile2: product;
	mobile3: product;
	mobile4: product;
	
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
}

interface product {
	id: number;
	productName: string;
	productType: string;
	brand: string;
	price: number;
	show: boolean;
}
