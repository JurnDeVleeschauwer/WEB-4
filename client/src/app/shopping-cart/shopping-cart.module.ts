import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './order/order.component';
import { ShoppingCartComponent } from './shopping-cart-folder/shopping-cart.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [ShoppingCartComponent, OrderComponent, OrderListComponent],
  imports: [CommonModule, HttpClientModule, MaterialModule],
  exports: [ShoppingCartComponent],
})
export class ShoppingCartModule {}
