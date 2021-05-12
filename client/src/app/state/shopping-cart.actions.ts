import { Action } from '@ngrx/store';
import { Product } from '../product-view/product.model';

export enum ShoppingCartActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item',
  REMOVE_ITEM = '[SHOPPING] Remove Item',
}

export class AddItemAction implements Action {
  readonly type = ShoppingCartActionTypes.ADD_ITEM;

  constructor(public payload: Product) {}
}

export class DeleteItemAction implements Action {
  readonly type = ShoppingCartActionTypes.REMOVE_ITEM;

  constructor(public payload: string) {}
}

export type ShoppingCartAction = AddItemAction | DeleteItemAction;
