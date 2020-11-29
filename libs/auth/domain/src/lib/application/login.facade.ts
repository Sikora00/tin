import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromUser from '../+state/user/user.reducer';
import * as UserSelectors from '../+state/user/user.selectors';

@Injectable({ providedIn: 'root' })
export class LoginFacade {
  loaded$ = this.store.pipe(select(UserSelectors.getUserLoaded));
  userList$ = this.store.pipe(select(UserSelectors.getAllUser));
  selectedUser$ = this.store.pipe(select(UserSelectors.getSelected));

  constructor(private store: Store<fromUser.UserPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
