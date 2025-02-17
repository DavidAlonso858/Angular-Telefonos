import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/products';

@Component({
  selector: 'app-proveedor-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proveedor-productos.component.html',
  styleUrls: ['./proveedor-productos.component.css']
})

export class ProveedorProductosComponent {
  productosFiltrados: Product[] = [];

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
  // pilla la id de la ruta
    this.route.paramMap.subscribe(params => {
      const idProveedor = Number(params.get('id')); // Obtener el ID de la URL
      // compruebo si hay productos con esa id
      this.productosFiltrados = this.cartService.getProductProvider(idProveedor);
    });
  }

}
