import { EntityState, EntityStore } from '@datorama/akita';
import { Todo } from '../models/Todo';
import { Injectable } from '@angular/core';

export interface State extends EntityState<Todo> {}

@Injectable({
  providedIn: 'root'
})
export class TodosStore extends EntityStore<State, Todo> {
  constructor() {
    super(initialState);
  }
}