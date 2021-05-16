import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { Order } from '../extra/order.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OrderDataService {
  private _orders: Order[];
  private _orders$ = new BehaviorSubject<Order[]>([]);

  constructor(private http: HttpClient) {
    this.orders$.subscribe((ord: Order[]) => {
      this._orders = ord;
      this._orders$.next(this._orders);
    });
  }

  get allOrders$(): Observable<Order[]> {
    return this._orders$;
  }

  get orders$(): Observable<Order[]> {
    return this.http.get('/api/Order').pipe(
      catchError(this.handleError),
      map((list: any[]): Order[] => list.map(Order.fromJSON))
    );
  }

  addNewOrder(order: Order) {
    return this.http
      .post(`/api/Order/`, order.toJSON())
      .pipe(catchError(this.handleError), map(Order.fromJSON))
      .subscribe((ord: Order) => {
        this._orders = [...this._orders, Order.fromJSON(ord)];
        this._orders$.next(this._orders);
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
