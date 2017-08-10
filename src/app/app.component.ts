import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
			<!--nav class="navbar navbar-inverse navbar-fixed-top">
			  <div class="container-fluid">
			    <div class="navbar-header" style="text-align: center;">
			      <span class="navbar-brand">Online Products Store</span>
					<ul style="float: right; list-display-style: none;">
				    	<li><a routerLink="/">Home</a></li>
		    			<li><a routerLink="/electronics">Electronics Store</a></li>
		    			<li><a routerLink="/clothes">Electronics Inventory</a></li>
		    			<li><a routerLink="/shoes">Shoes Inventory</a></li>
		    			<li><a routerLink="/books">Books Inventory</a></li>
		    		</ul>
			    </div>
			  </div>
			</nav-->
		  	<router-outlet></router-outlet>
		`
})
export class AppComponent  {}
