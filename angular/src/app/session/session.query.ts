import { Query } from '@datorama/akita';
import { SessionStore, SessionState } from './session.store';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<SessionState> {  

	isLoggedIn$ = this.select(state => !!state.token);
	selectName$ = this.select('name');
	//multi$ = this.select(['name', 'age']) // { name, age }
	//multi$ = this.select[state => state.name, state => state.age] // [name, age]

	constructor(protected store: SessionStore) {
		super(store);
	}

}