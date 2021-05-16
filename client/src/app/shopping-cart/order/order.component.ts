import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../extra/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  @Input() public order: Order;

  constructor() {}

  ngOnInit(): void {}
}
