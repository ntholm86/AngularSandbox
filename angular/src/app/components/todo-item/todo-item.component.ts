import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
	selector: 'app-todo-item',
	templateUrl: './todo-item.component.html',
	styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
	@Output() deleteItem: EventEmitter<Todo> = new EventEmitter();
	@Output() completeItem: EventEmitter<Todo> = new EventEmitter();
	@Input() item: Todo;

	constructor(private service:TodosService) {}

	ngOnInit() {
	}

	onComplete(item: Todo) {
		this.completeItem.emit(item);
	}

	onDelete(item: Todo) {
		this.deleteItem.emit(item);
	}

}
