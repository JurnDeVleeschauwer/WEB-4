import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Product } from '../product-view/product.model';
import { AppState } from '../state/app-state.model';
import {
  AddItemAction,
  DeleteItemAction,
} from '../state/shopping-cart.actions';
import { AuthenticationService } from '../user/authentication/authentication.service';
import { Order } from './extra/order.model';
import { OrderDataService } from './order-data/order-data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart$: Observable<Array<Product>>;

  constructor(
    private _store: Store<AppState>,
    private http: HttpClient,
    private _orderDataService: OrderDataService,
    private _authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.shoppingCart$ = this._store.select((state) => state.shoppingCart);
  }

  addItem(product: Product) {
    this._store.dispatch(new AddItemAction(product));
  }

  deleteItem(name: string) {
    this._store.dispatch(new DeleteItemAction(name));
  }

  createOrder() {
    console.log(JSON.stringify(this.getState(this._store).shoppingCart));
    this._orderDataService.addNewOrder(
      new Order(
        this._authenticationService.user$.getValue(),
        JSON.stringify(this.getState(this._store).shoppingCart)
      )
    );
    this.getState(this._store).shoppingCart.forEach((element) => {
      this.deleteItem(element.name);
    });
  }

  getState(store: Store<AppState>): AppState {
    let state: AppState;

    store.pipe(take(1)).subscribe((s) => (state = s));

    return state;
  }
}
