import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../../model/products';
import { CartService } from '../../services/cart.service';
import { Proveedor } from '../../model/proveedor';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
})

export class ProductDetailsComponent  {
  proveedor: Proveedor[] = [];
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    //  Consigue la id de la ruta
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Encuentra el producto con la id de la ruta
    this.product = products.find(product => product.id === productIdFromRoute);

    // almaceno el array del json de proveedores
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
