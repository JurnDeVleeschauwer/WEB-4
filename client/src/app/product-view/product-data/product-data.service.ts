import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../product.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  private _producten: Product[];
  private _producten$ = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {
    this.producten$.subscribe((pro: Product[]) => {
      this._producten = pro;
      this._producten$.next(this._producten);
    });
  }

  get allProducten$(): Observable<Product[]> {
    return this._producten$;
  }

  get producten$(): Observable<Product[]> {
    return this.http
      .get('/api/WebShop')
      .pipe(map((list: any[]): Product[] => list.map(Product.fromJSON)));
  }
}
