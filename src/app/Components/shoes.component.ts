import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'shoes',
  templateUrl: 'shoes.component.html'
})
export class ShoesComponent { 
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
			show: true
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
}

interface product {
	id: number;
	productName: string;
	productType: string;
	brand: string;
	price: number;
	show: boolean;
}
