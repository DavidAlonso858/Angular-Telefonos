import { Proveedor } from "./proveedor";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  proveedor: Proveedor
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    proveedor: {
      "id": 3,
      "nombre": "GOOGLE PIXEL"
    }
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    proveedor: {
      "id": 1,
      "nombre": "SAMSUNG"
    }
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    proveedor: {
      "id": 2,
      "nombre": "IPHONE"
    }
  },
  {
    id: 4,
    name: 'Phone Prueba',
    price: 999,
    description: '',
    proveedor: {
      "id": 2,
      "nombre": "IPHONE"
    }
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/