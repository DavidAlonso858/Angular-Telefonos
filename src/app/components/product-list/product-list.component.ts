import { Component } from '@angular/core';

import { products } from '../../model/products';
import { Proveedor } from '../../model/proveedor';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule, ProductAlertsComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];
  proveedores: Proveedor[] = [];

  share() {
    window.alert('The product has been shared!');
  }

  constructor(private cartService: CartService){}

  ngOnInit() {
    this.cartService.getProveedores().subscribe((e) => {
      this.proveedores = e;
    })
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
