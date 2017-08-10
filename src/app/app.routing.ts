import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ProductComponent }  from './Components/product.component';
import { ElectronicsComponent }  from './Components/electronics.component';
import { ClothesComponent }  from './Components/clothes.component';
import { ShoesComponent }  from './Components/shoes.component';
import { BooksComponent }  from './Components/books.component';

const appRoutes: Routes = [
   {
   		path: '',
   		component: ProductComponent
   },
   {
   		path: 'electronics',
   		component: ElectronicsComponent
   },
   {
   		path: 'clothes',
   		component: ClothesComponent
   },
   {
   		path: 'shoes',
   		component: ShoesComponent
   },
   {
   		path: 'books',
   		component: BooksComponent
   },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);