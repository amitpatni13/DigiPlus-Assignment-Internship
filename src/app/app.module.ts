import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { ProductComponent }  from './Components/product.component';
import { ElectronicsComponent }  from './Components/electronics.component';
import { ClothesComponent }  from './Components/clothes.component';
import { ShoesComponent }  from './Components/shoes.component';
import { BooksComponent }  from './Components/books.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, ProductComponent, ElectronicsComponent, ClothesComponent, ShoesComponent, BooksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
