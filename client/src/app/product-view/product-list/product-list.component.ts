import { Component, OnInit } from '@angular/core';
import { PRODUCTEN } from '../mock-products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  private _products = PRODUCTEN;
  constructor() {}

  get products() {
    return this._products;
  }
}
