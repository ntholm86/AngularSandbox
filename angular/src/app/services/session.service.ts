import { SessionStore } from '../stores/session.store';

export class SessionService {
  constructor(private sessionStore: SessionStore) {}

  updateUserName(newName: string) {
    this.sessionStore.update({ name: newName });
  }  
}