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
  // CommonModule para usar los ngFor y los ngIf
  imports: [RouterModule, ProductAlertsComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent {
  products = [...products]; // copio el array del modelo
  proveedores: Proveedor[] = [];

  // funciones con mensajes para alertar cuando clicka
  share() {
    window.alert('The product has been shared!');
  }

  constructor(private cartService: CartService){}

  // almaceno el array pillado de la url en el service
  ngOnInit() {
    this.cartService.getProveedores().subscribe((e) => {
      this.proveedores = e;
    })
  }


  // funciones con mensajes para alertar cuando clicka
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
