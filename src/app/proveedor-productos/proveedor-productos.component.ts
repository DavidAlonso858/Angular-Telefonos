import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../products';

@Component({
  selector: 'app-proveedor-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proveedor-productos.component.html',
  styleUrls: ['./proveedor-productos.component.css']
})
export class ProveedorProductosComponent implements OnInit {
  productosFiltrados: Product[] = [];

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idProveedor = Number(params.get('id')); // Obtener el ID de la URL
      this.productosFiltrados = this.cartService.getProductProvider(idProveedor);
    });
  }
}
