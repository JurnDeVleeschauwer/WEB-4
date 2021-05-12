import { Product } from '../product-view/product.model';

export interface AppState {
  readonly shoppingCart: Array<Product>;
}
