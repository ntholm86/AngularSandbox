import { Component, OnInit, EventEmitter, Output, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
	@Output() createTodo: EventEmitter<any> = new EventEmitter();
	name: string;

	constructor() { }

	ngOnInit() {
	} 

	onSubmit() {
		const todo = {
			'id': 0,
			'name': this.name, 
			'isComplete': false
		};
		this.createTodo.emit(todo);
	}

}
