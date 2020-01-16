import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
	@Input() todo: Todo;
	@Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

	constructor(
		private todoService: TodosService
		) { }

	ngOnInit() {

	}

	onToggleComplete(todo: Todo){
		todo.isComplete = !todo.isComplete;
		this.todoService.put(todo).subscribe(todo => console.log(todo));
	}

	onDelete(todo: Todo){
		this.deleteTodo.emit(todo);
	}

	onCreate(todo: Todo){
		this.todoService.post(todo);
	}

}
