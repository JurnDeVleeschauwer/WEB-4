import { Injectable } from '@angular/core';
import { PRODUCTEN } from '../mock-products';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  private _producten = PRODUCTEN;
  constructor() {}

  get producten() {
    return this._producten;
  }

  addNewProduct(product: Product) {
    this._producten.push(product);
  }
}
