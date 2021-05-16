import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderDataService } from '../order-data/order-data.service';
import { Order } from '../extra/order.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent {
  private _fetchOrders$: Observable<Order[]>;

  constructor(private _orderDataService: OrderDataService) {
    this._fetchOrders$ = this._orderDataService.allOrders$;
  }

  get orders$(): Observable<Order[]> {
    return this._fetchOrders$;
  }
}
