import { MaterialModule } from '../material/material.module';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'list', component: ProductListComponent },
  { path: 'add', component: AddProductComponent },
];

@NgModule({
  declarations: [ProductListComponent, AddProductComponent, ProductComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [ProductListComponent, AddProductComponent],
})
export class ProductViewModule {}
