import { SessionStore } from './session.store';

export class SessionService {
  constructor(private sessionStore: SessionStore) {}

  updateName(newName: string) {
    this.sessionStore.update({ name: newName });
  }  
}