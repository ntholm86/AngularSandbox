import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './modules/products/products.component';

const routes: Routes = [
  	{
		component: ProductsComponent,
		path: '',
		pathMatch: 'full',
		// canActivate: [AuthGuard]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
