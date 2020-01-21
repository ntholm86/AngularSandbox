import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { createInitialState } from '../session/session.store';
import { Injectable } from '@angular/core';
import { Todo } from './Todo';

export interface TodosState extends EntityState<Todo> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Todos' })
export class TodosStore extends EntityStore<TodosState, Todo> {
  constructor() {
    super(createInitialState());
  }
}