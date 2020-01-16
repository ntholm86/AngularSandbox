import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

	todos: Todo[] = [];

	constructor(
		private todoService: TodosService,
		) { }

	ngOnInit() {
		this.todoService.get().subscribe(result => {
			this.todos = result;
		});

	}
	deleteTodo(todo: Todo) {
		// Event emitted from todo-item-component
		this.todoService.delete(todo).subscribe(response => {
			if(response){
				this.todos = this.todos.filter(x => x.id !== todo.id);
			}
		});
	}
	createTodo(todo: Todo) {
		// Event emitted from add-todo-component
		this.todoService.post(todo).subscribe(response => {
			this.todos.push(response);
		});
	}

}
