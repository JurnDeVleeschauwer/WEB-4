import { Component } from '@angular/core';
import { Store, select, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from './product-view/product.model';
import { AppState } from './state/app-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'welcome to the Shoppingapp';
}
