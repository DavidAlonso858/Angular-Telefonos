import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../../model/products';
import { CartService } from '../../services/cart.service';
import { Proveedor } from '../../model/proveedor';
import { CommonModule } from '@angular/common';
import { Product2 } from '../../model/producto2';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})

export class ProductDetailsComponent {
  proveedor: Proveedor[] = [];
  product: Product | undefined;

  origen2: Product2[] = []
  origen3: Product2 | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getProductos().subscribe((pro) => {
      this.origen2 = pro;
      console.log(this.origen2);
      this.origen3 = this.origen2.find(ori => ori.product_id === productIdFromRoute) // segundo json

    })

    //  Consigue la id de la ruta
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Encuentra el producto con la id de la ruta
    this.product = products.find(product => product.id === productIdFromRoute); // primer json
    // almaceno el array del json de proveedores
    this.cartService.getProveedores().subscribe((e) => {
      this.proveedor = e;
    })
  }

  addToCart(product: Product) {
    if (!product) return;
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
