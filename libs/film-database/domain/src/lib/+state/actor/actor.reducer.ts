import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ActorActions from './actor.actions';
import { Actor } from '../../entities/actor';

export const ACTOR_FEATURE_KEY = 'actor';

export interface State extends EntityState<Actor> {
  selectedId?: string | number; // which Actor record has been selected
  loaded: boolean; // has the Actor list been loaded
  error?: string | null; // last known error (if any)
}

export interface ActorPartialState {
  readonly [ACTOR_FEATURE_KEY]: State;
}

export const actorAdapter: EntityAdapter<Actor> = createEntityAdapter<Actor>();

export const initialState: State = actorAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const actorReducer = createReducer(
  initialState,
  on(ActorActions.loadActor, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ActorActions.loadActorSuccess, (state, { actor }) =>
    actorAdapter.upsertMany(actor, { ...state, loaded: true })
  ),
  on(ActorActions.loadActorFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return actorReducer(state, action);
}
