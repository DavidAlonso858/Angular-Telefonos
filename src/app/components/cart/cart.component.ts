import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../model/products';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule], // para usar el FormGroup
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})

export class CartComponent {

  // array de productos que he seleccioando para el carro
  items = this.cartService.getItems();

  checkoutForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    shipping: new FormControl('', [Validators.required])
  });

  shippingCosts!: Observable<{ type: string, price: number }[]>;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  onSubmit(): void {
    // limpia los productos del carrito declarando el array a vacio
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  removeItem(product: Product) {
    this.cartService.removeFromCart(product);
    // metodo del service para borrarlo

    this.items = this.cartService.getItems();
  }
}
