import { EntityState, EntityStore } from '@datorama/akita';
import { Store, StoreConfig } from '@datorama/akita';
import { Todo } from '../models/Todo';

export interface State extends EntityState<Todo> {}

export interface SessionState {
   token: string;
   name: string;
}

export function createInitialState(): SessionState {
  return {
    token: '',
    name: ''
  };
}

@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}