import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo/Todo';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss']
})
export class AddTodoItemComponent implements OnInit {
  @Output() createItem: EventEmitter<any> = new EventEmitter();
  title: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.createItem.emit(this.title);
    this.title = '';
  }

}
