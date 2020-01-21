import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';

const routes: Routes = [
  {
    component: ProductsComponent,
    path: '',
    pathMatch: 'full',
    // canActivate: [AuthGuard]
  },
  {
    component: ProductComponent,
    path: 'product/:id',
    // canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
