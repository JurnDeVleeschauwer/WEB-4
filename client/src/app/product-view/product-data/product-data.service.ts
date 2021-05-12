import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { Product } from '../product.model';
import { catchError, map } from 'rxjs/operators';

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
    return this.http.get('/api/WebShop').pipe(
      catchError(this.handleError),
      map((list: any[]): Product[] => list.map(Product.fromJSON))
    );
  }

  addNewProduct(product: Product) {
    return this.http
      .post(`/api/WebShop/`, product.toJSON())
      .pipe(catchError(this.handleError), map(Product.fromJSON))
      .subscribe((pro: Product) => {
        this._producten = [...this._producten, Product.fromJSON(pro)];
        this._producten$.next(this._producten);
      });
  }

  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else if (err instanceof HttpErrorResponse) {
      console.log(err);
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = err;
    }
    return throwError(errorMessage);
  }
}
