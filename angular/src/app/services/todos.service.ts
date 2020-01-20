import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo, createTodo } from '../models/Todo';
import { TodosStore } from '../stores/todos.store';

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

	constructor(
		private http: HttpClient, 
		private todosStore: TodosStore
	) { }

	add(name: string) {
		const todo = createTodo({ id: Math.random(), name });
		this.todosStore.add(todo);
	}

	complete({ id, isComplete }: Todo) {
		this.todosStore.update(id, {
		  	isComplete
		});
	}

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
