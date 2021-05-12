import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const appRoutes: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('./product-view/product-view.module').then(
        (mod) => mod.ProductViewModule
      ),
    data: { preload: true },
  },
  { path: 'shoppingCart', component: ShoppingCartComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
