import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';

const publicApi = [ProductsComponent, ProductComponent];

@NgModule({
	imports: [CommonModule, RouterModule, ReactiveFormsModule],
	declarations: [publicApi, AddProductComponent],
	exports: [publicApi]
})
export class ProductsModule {}