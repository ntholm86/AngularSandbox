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
	@Input() item: Todo;

	constructor(private service:TodosService) {}

	ngOnInit() {
	}

	onComplete(item: Todo) {
		this.item.isComplete = !item.isComplete;
		this.service.put(item).subscribe(item => {
			console.log(item);
		});
	}

	onDelete(item: Todo) {
		this.deleteItem.emit(item);
	}

}
