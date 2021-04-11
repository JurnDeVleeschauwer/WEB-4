import { Component } from '@angular/core';
import { ProductDataService } from '../product-data/product-data.service';
import { Product } from '../product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  private _fetchProducten$: Observable<Product[]>;

  constructor(private _productDataService: ProductDataService) {
    this._fetchProducten$ = this._productDataService.allProducten$;
  }

  get producten$(): Observable<Product[]> {
    return this._fetchProducten$;
  }
}
