import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  MOVIE_FEATURE_KEY,
  State,
  MoviePartialState,
  movieAdapter,
} from './movie.reducer';

// Lookup the 'Movie' feature state managed by NgRx
export const getMovieState = createFeatureSelector<MoviePartialState, State>(
  MOVIE_FEATURE_KEY
);

const { selectAll, selectEntities } = movieAdapter.getSelectors();

export const getMovieLoaded = createSelector(
  getMovieState,
  (state: State) => state.loaded
);

export const getMovieError = createSelector(
  getMovieState,
  (state: State) => state.error
);

export const getAllMovie = createSelector(getMovieState, (state: State) =>
  selectAll(state)
);

export const getMovieEntities = createSelector(getMovieState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getMovieState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getMovieEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
