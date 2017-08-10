import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'books',
  	templateUrl: 'books.component.html',
})
export class BooksComponent  { 
	books1: product;
	books2: product;
	books3: product;
	books4: product;
	books5: product;

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
	author: string;
	price: number;
	show: boolean;
}
