import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-top-bar',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css'],
})

export class TopBarComponent {
    numberOfItems$: Observable<number>;

    constructor(private cartService: CartService) {
        this.numberOfItems$ = this.cartService.itemsObservable.pipe(
            map(items => items.length)
        );
    }

}