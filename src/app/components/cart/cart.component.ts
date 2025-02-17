import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule } from '@angular/forms';

import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  checkoutForm = this.formBuilder.group({ name: '', address: '' });
  
  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  onSubmit(): void {
    // limpia los productos del carrito declarando el array a vacio
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
