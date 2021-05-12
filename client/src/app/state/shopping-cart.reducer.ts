import { Product } from '../product-view/product.model';
import {
  ShoppingCartAction,
  ShoppingCartActionTypes,
} from './shopping-cart.actions';

const initialState: Array<Product> = [
  Product.fromJSON({ name: 'fzefez', price: 99 }),
];

export function ShoppingCartReducer(
  state: Array<Product> = initialState,
  action: ShoppingCartAction
) {
  switch (action.type) {
    case ShoppingCartActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case ShoppingCartActionTypes.REMOVE_ITEM:
      return state.filter((item) => item.name !== action.payload);
    default:
      return state;
  }
}
