import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ACTOR_FEATURE_KEY,
  State,
  ActorPartialState,
  actorAdapter,
} from './actor.reducer';

// Lookup the 'Actor' feature state managed by NgRx
export const getActorState = createFeatureSelector<ActorPartialState, State>(
  ACTOR_FEATURE_KEY
);

const { selectAll, selectEntities } = actorAdapter.getSelectors();

export const getActorLoaded = createSelector(
  getActorState,
  (state: State) => state.loaded
);

export const getActorError = createSelector(
  getActorState,
  (state: State) => state.error
);

export const getAllActor = createSelector(getActorState, (state: State) =>
  selectAll(state)
);

export const getActorEntities = createSelector(getActorState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getActorState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getActorEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
