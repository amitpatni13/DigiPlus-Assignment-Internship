"use strict";
var router_1 = require("@angular/router");
var product_component_1 = require("./Components/product.component");
var electronics_component_1 = require("./Components/electronics.component");
var clothes_component_1 = require("./Components/clothes.component");
var shoes_component_1 = require("./Components/shoes.component");
var books_component_1 = require("./Components/books.component");
var appRoutes = [
    {
        path: '',
        component: product_component_1.ProductComponent
    },
    {
        path: 'electronics',
        component: electronics_component_1.ElectronicsComponent
    },
    {
        path: 'clothes',
        component: clothes_component_1.ClothesComponent
    },
    {
        path: 'shoes',
        component: shoes_component_1.ShoesComponent
    },
    {
        path: 'books',
        component: books_component_1.BooksComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map