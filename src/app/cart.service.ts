import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';
import { Proveedor } from './proveedor';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private url = 'http://localhost:3000/proveedores';

  items: Product[] = [];
  // items: {product: Product, quantity: number }[] = [];

  constructor(private http: HttpClient) {

  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getProveedores() {
    return this.http.get<Proveedor[]>(this.url);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
  }
}
