import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/Todo/Todo';
import { TodosService } from 'src/app/Todo/todos.service';
import { Observable, combineLatest } from 'rxjs';
import { TodosQuery } from '../todos.query';
import { startWith, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
	loading$: Observable<boolean>;
	todos$: Observable<Todo[]>;
	search = new FormControl();
	sortControl = new FormControl('name');
	
	data: Todo[];

  	constructor(private todosService:TodosService, private todosQuery: TodosQuery) {
		
	}

	ngOnInit() {
		this.todosService.get().subscribe();
		this.loading$ = this.todosQuery.selectLoading();
		
		this.todos$ = combineLatest(this.search.valueChanges.pipe(startWith('')), this.sortControl.valueChanges.pipe(startWith('name'))).pipe(
			switchMap(([term, sortBy]) => this.todosQuery.getTodos(term, sortBy as keyof Todo))
		);
	}

	deleteItem(item: Todo) {
		this.data = this.data.filter(t => t.id != item.id);
		this.todosService.delete(item).subscribe();
	}

	createItem(name: string) {
		this.todosService.add(name);
	}

	completeItem(item: Todo) {
		this.todosService.complete(item);
	}
}
