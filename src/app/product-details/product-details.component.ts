import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { Proveedor } from '../proveedor';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  proveedor: Proveedor[] = [];
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);

    this.cartService.getProveedores().subscribe((e) =>{
      this.proveedor =e;
    })
  }

  addToCart(product: Product) {
    if (!product) return;
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
