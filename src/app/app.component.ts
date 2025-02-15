import { Component } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
@Component({
    selector: 'app-root',
    imports: [RouterModule, TopBarComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true
})
export class AppComponent {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/