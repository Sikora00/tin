import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromActor from '../+state/actor/actor.reducer';
import * as ActorSelectors from '../+state/actor/actor.selectors';

@Injectable({ providedIn: 'root' })
export class ActorListFacade {
  loaded$ = this.store.pipe(select(ActorSelectors.getActorLoaded));
  actorList$ = this.store.pipe(select(ActorSelectors.getAllActor));
  selectedActor$ = this.store.pipe(select(ActorSelectors.getSelected));

  constructor(private store: Store<fromActor.ActorPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
