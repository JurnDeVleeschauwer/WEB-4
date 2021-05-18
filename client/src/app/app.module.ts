import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductViewModule } from './product-view/product-view.module';
import { UserModule } from './user/authentication/user.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { ShoppingCartReducer } from './state/shopping-cart.reducer';
import { FormsModule } from '@angular/forms';
import { OrderListComponent } from './shopping-cart/order-list/order-list.component';
import { httpInterceptorProviders } from './user/interceptors';
import { OrderComponent } from './shopping-cart/order/order.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    MainNavComponent,
    PageNotFoundComponent,
    OrderListComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProductViewModule,
    UserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    StoreModule.forRoot({ shoppingCart: ShoppingCartReducer }),
  ],
  providers: [ShoppingCartComponent, httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
