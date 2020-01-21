import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { TodosStore } from './todos.store';
import { map, mapTo } from 'rxjs/operators';
import { cacheable, ID } from '@datorama/akita';
import { todos } from './todos.mocks';
import { Todo, createTodo } from './Todo';

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

	constructor(private http: HttpClient, private todosStore: TodosStore) {}

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

	/* AKITA */
  
	getSingle(): Observable<void> {
		const request = timer(500).pipe(
			mapTo(todos),
			map(response => this.todosStore.set(response))
		);
  
	  	return cacheable(this.todosStore, request);
	}
  
	getTodos(id: ID) {
	  	const product = todos.find(current => current.id === +id);
  
		return timer(500).pipe(
			mapTo(product),
			map(() => this.todosStore.add(product))
		);
	}

	add(name: string) {
		const todo = createTodo({ id: Math.random(), name });
		this.todosStore.add(todo);
	}

	complete({ id, isComplete }: Todo) {
		this.todosStore.update(id, {
		  	isComplete
		});
	}
}