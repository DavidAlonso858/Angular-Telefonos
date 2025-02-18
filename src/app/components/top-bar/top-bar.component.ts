import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-top-bar',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css'],
})

export class TopBarComponent {
    numberOfItems: number = 0; // Variable normal en lugar de un Observable

    constructor(private cartService: CartService) { }

    ngOnInit() {
        this.cartService.itemsObservable$.subscribe(items => {
            this.numberOfItems = items.length; // Se actualiza cuando cambia el carrito
        });
    }
}