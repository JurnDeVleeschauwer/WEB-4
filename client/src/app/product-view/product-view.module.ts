import { MaterialModule } from '../material/material.module';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [CommonModule, HttpClientModule, MaterialModule],
  exports: [ProductListComponent],
})
export class ProductViewModule {}
