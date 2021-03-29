import { Product } from './product.model';

const JsonRecipes = [
  {
    name: 'spaghetti',
    price: 1,
  },
  {
    name: 'risotto',
    price: 2,
  },
];
export const PRODUCTEN: Product[] = JsonRecipes.map(Product.fromJSON);
