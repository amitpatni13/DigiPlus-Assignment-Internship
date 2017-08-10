import { Component } from '@angular/core';

@Component({	
  moduleId: module.id,	
  selector: 'clothes',
  templateUrl: 'clothes.component.html'
})
export class ClothesComponent  { 
	shirt1: product;
	shirt2: product;
	shirt3: product;
	tshirt1: product;
	tshirt2: product;
	tshirt3: product;
	pants1: product;
	pants2: product;
	pants3: product;
	
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

}

interface product {
	id: number;
	productName: string;
	productType: string;
	brand: string;
	price: number;
	show: boolean;
}
