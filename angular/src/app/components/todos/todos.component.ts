import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
	data: Todo[];

  	constructor(private service:TodosService) {
		
	}

	ngOnInit() {
		this.service.get().subscribe(data => {
			this.data = data;
		});
	}

	deleteItem(item: Todo) {
		this.data = this.data.filter(t => t.id != item.id);
		this.service.delete(item).subscribe();
	}

	createItem(name: string) {
		this.service.add(name);
	}

	completeItem(item: Todo) {
		this.service.complete(item);
	}
}
