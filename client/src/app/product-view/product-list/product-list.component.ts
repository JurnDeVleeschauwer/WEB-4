import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductDataService } from '../product-data/product-data.service';
import { Product } from '../product.model';
import { Observable } from 'rxjs';
import { ShoppingCartComponent } from '../../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  private _fetchProducten$: Observable<Product[]>;

  constructor(
    private _productDataService: ProductDataService,
    private _shoppingCartComponent: ShoppingCartComponent
  ) {
    this._fetchProducten$ = this._productDataService.allProducten$;
  }

  get producten$(): Observable<Product[]> {
    return this._fetchProducten$;
  }

  addItem(product: Product) {
    this._shoppingCartComponent.addItem(product);
  }
}
