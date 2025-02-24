import { HttpClient } from '@angular/common/http';
import { Product, products } from '../model/products';
import { Injectable } from '@angular/core';
import { Proveedor } from '../model/proveedor';
import { BehaviorSubject } from 'rxjs';
import { Product2 } from '../model/producto2';

// puede ser usada en cualquier sitio
@Injectable({
  providedIn: 'root'
})

export class CartService {

  private url = 'http://localhost:3000/proveedores';
  private url2 = 'http://localhost:3001/products';

  items: Product[] = [];
  // items: {product: Product, quantity: number }[] = [];

  private itemsSubject = new BehaviorSubject<Product[]>(this.items);
  itemsObservable$ = this.itemsSubject.asObservable(); // para mostrar el numero a tiempo real

  constructor(private http: HttpClient) {

  }
  // agrego producto al array
  addToCart(product: Product) {
    this.items.push(product);
    this.itemsSubject.next(this.items);
  }

  // devuelvo el array 
  getItems() {
    return this.items;
  }

  // devuelve el array entero del json creado
  getProveedores() {
    return this.http.get<Proveedor[]>(this.url);
  }

  getProductos() {
    return this.http.get<[Product2]>(this.url2);
  }

  // se usa el array de products definido y lo filtro por la id que le paso del proveedor
  getProductProvider(providerId: number): Product[] {
    return products.filter(p => p.proveedor.id === providerId);
    console.log(products);
  }

  //vacio el array
  clearCart() {
    this.items = [];
    this.itemsSubject.next(this.items); // se usa para que el subscribe tenga el cambio
    return this.items;
  }

  // carga un json de precios desde la carpeta assets
  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
  }


  removeFromCart(product: Product) {
    const index = this.items.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.items.splice(index, 1); // Borra el objeto
      this.itemsSubject.next(this.items); // se usa para que el subscribe tenga el cambio
    }
  }
}
