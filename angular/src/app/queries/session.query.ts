import { Query } from '@datorama/akita';
import { SessionStore, SessionState } from '../stores/session.store';

export class SessionQuery extends Query<SessionState> {  
  constructor(protected store: SessionStore) {
    super(store);
  }
}