import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, switchMap } from 'rxjs/operators';
import { Product } from './state/products.model';
import { ProductsService } from './state/products.service';
import { ProductsQuery } from './state/products.query';

@Component({
  selector: 'app-products',
  templateUrl: `./products.component.html`
})
export class ProductsComponent implements OnInit {
	products$: Observable<Product[]>;
	search = new FormControl();
	sortControl = new FormControl('title');

	constructor(
		private productsService: ProductsService, 
		private productsQuery: ProductsQuery
		) {}

	ngOnInit() {
		this.productsService.get().subscribe();
		this.products$ = this.productsQuery.selectAll();
		/*
		combineLatest(
			this.search.valueChanges.pipe(startWith('')), 
			this.sortControl.valueChanges.pipe(startWith('title'))
		).pipe(
			switchMap(([term, sortBy]) => this.productsQuery.getProducts(term, sortBy as keyof Product))
		);
		*/
	}

	subtract({ id }: Product) {
		console.log('Remove: ' + id);
		//this.cartService.subtract(id);
	}
}