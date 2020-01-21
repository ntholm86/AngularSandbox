import { Injectable } from '@angular/core';
import { QueryConfig, QueryEntity } from '@datorama/akita';
import { TodosState, TodosStore } from './todos.store';
import { Todo } from './Todo';

@Injectable({ providedIn: 'root' })
@QueryConfig({ sortBy: 'name' })
export class TodosQuery extends QueryEntity<TodosState> {

	constructor(protected store: TodosStore) {
		super(store);
	}

	getTodos(term: string, sortBy: keyof Todo) {
		return this.selectAll({
			sortBy,
			filterBy: entity => entity.name.toLowerCase().includes(term)
		});
	}

}