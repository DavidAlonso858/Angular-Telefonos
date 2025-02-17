import { HttpClient } from '@angular/common/http';
import { Product, products } from '../model/products';
import { Injectable } from '@angular/core';
import { Proveedor } from '../model/proveedor';

// puede ser usada en cualquier sitio
@Injectable({
  providedIn: 'root'
})

export class CartService {

  private url = 'http://localhost:3000/proveedores';

  items: Product[] = [];
  // items: {product: Product, quantity: number }[] = [];

  constructor(private http: HttpClient) {

  }
  // agrego producto al array
  addToCart(product: Product) {
    this.items.push(product);
  }

  // devuelvo el array 
  getItems() {
    return this.items;
  }

  // devuelve el array entero del json creado
  getProveedores() {
    return this.http.get<Proveedor[]>(this.url);
  }

  // se usa el array de products definido y lo filtro por la id que le paso del proveedor
  getProductProvider(providerId: number): Product[] {
    return products.filter(p => p.proveedor.id === providerId);
    console.log(products);
  }

  //vacio el array
  clearCart() {
    this.items = [];
    return this.items;
  }

  // carga un json de precios desde la carpeta assets
  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
  }
}
