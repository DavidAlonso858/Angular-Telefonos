import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/products';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-alerts',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-alerts.component.html',
    styleUrl: './product-alerts.component.css',
})

export class ProductAlertsComponent {

  // recibe un producto en el componente product-list
  @Input() product: Product | undefined;

  // emite un evento (notify)
  @Output() notify = new EventEmitter();
}
