import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FILM_FEATURE_KEY,
  State,
  FilmPartialState,
  filmAdapter,
} from './film.reducer';

// Lookup the 'Film' feature state managed by NgRx
export const getFilmState = createFeatureSelector<FilmPartialState, State>(
  FILM_FEATURE_KEY
);

const { selectAll, selectEntities } = filmAdapter.getSelectors();

export const getFilmLoaded = createSelector(
  getFilmState,
  (state: State) => state.loaded
);

export const getFilmError = createSelector(
  getFilmState,
  (state: State) => state.error
);

export const getAllFilm = createSelector(getFilmState, (state: State) =>
  selectAll(state)
);

export const getFilmEntities = createSelector(getFilmState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getFilmState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getFilmEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
