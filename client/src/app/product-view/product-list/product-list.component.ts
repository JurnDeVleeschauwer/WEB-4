import { Component, OnInit } from '@angular/core';
import { PRODUCTEN } from '../mock-products';
import { ProductDataService } from '../product-data/product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor(private _productDataService: ProductDataService) {}

  get producten() {
    return this._productDataService.producten;
  }
}
