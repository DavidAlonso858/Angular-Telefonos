import { Component} from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-shipping',
    templateUrl: './shipping.component.html',
    styleUrl: './shipping.component.css',
    standalone: true,
    imports: [RouterModule, CommonModule] 
})

export class ShippingComponent {

  // La exclamación es una Aserción definitiva
  // Es como si le dijeras a TypeScript: "Confía en mí, esta propiedad será inicializada en algún momento antes de que sea utilizada"
  shippingCosts!: Observable<{ type: string, price: number }[]>;

  constructor(private cartService: CartService) { }
  
  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }

}
