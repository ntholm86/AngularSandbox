import { Injectable } from '@angular/core';
import { Observable } from 'nilsApp/node_modules/rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
}

@Injectable({
  	providedIn: 'root'
})
export class TodosService {

	url: string = 'http://localhost:59508/api/todoitems';

	constructor(private http: HttpClient) { }

	get():Observable<Todo[]> {
		return this.http.get<Todo[]>(this.url);
	}

	post(item: Todo):Observable<Todo> {
		return this.http.post<Todo>(this.url, item, httpOptions);
	}

	put(item: Todo):Observable<any> {
		const putUrl = `${this.url}/${item.id}`;
		return this.http.put<Todo>(putUrl, item, httpOptions);
	}

	delete(item: Todo):Observable<Todo> {
		const delUrl = `${this.url}/${item.id}`;
		return this.http.delete<Todo>(delUrl, httpOptions);
	}
  
}
