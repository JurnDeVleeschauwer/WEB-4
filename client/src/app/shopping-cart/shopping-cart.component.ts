import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../product-view/product.model';
import { AppState } from '../state/app-state.model';
import {
  AddItemAction,
  DeleteItemAction,
} from '../state/shopping-cart.actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart$: Observable<Array<Product>>;

  constructor(private store: Store<AppState>, private http: HttpClient) {}

  ngOnInit(): void {
    this.shoppingCart$ = this.store.select((state) => state.shoppingCart);
  }

  addItem(product: Product) {
    this.store.dispatch(new AddItemAction(product));
  }

  deleteItem(name: string) {
    this.store.dispatch(new DeleteItemAction(name));
  }

  createOrder() {
    this.store;
  }
}
