import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingBagComponent } from './shopping-bag/shopping-bag.component';
import { ProductViewModule } from './product-view/product-view.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AppComponent, ShoppingBagComponent],
  imports: [BrowserModule, ProductViewModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
