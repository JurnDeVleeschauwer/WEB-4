import { MaterialModule } from '../material/material.module';
import { ProductComponent } from './product/product.component';
import { AantalProductenGaanKopenComponent } from './aantal-producten-gaan-kopen/aantal-producten-gaan-kopen.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProductListComponent,
    AantalProductenGaanKopenComponent,
    ProductComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [ProductListComponent],
})
export class ProductViewModule {}
