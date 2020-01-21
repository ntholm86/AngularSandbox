import { Injectable } from '@angular/core';
import { ProductsStore } from './products.store';
import { map, mapTo } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import { ID, cacheable } from '@datorama/akita';
import { products } from '../products.mocks';
import { Product } from './products.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    constructor(
        private productsStore: ProductsStore,
        private http: HttpClient
        ) {}

    get(): Observable<void> {
        const request = timer(500).pipe(
        mapTo(products),
        map(response => this.productsStore.set(response))
        );

        return cacheable(this.productsStore, request);
    }

    getProducts(): Observable<any> {
        return this.http.get(environment.apiUrl + '/products/');
    }

    createProduct(item: Product):Observable<Product> {
        return this.http.post<Product>(environment.apiUrl + '/products/', item);
    }

	update(item: Product) {
        console.log('update');
        this.productsStore.update(state => ({
            name: item.title
        }));
	}

	delete(item: Product) {
        //this.productsStore.destroy();
	}
}