import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as MovieActions from './movie.actions';
import { Movie } from '../../entities/movie';

export const MOVIE_FEATURE_KEY = 'movie';

export interface State extends EntityState<Movie> {
  selectedId?: string | number; // which Movie record has been selected
  loaded: boolean; // has the Movie list been loaded
  error?: string | null; // last known error (if any)
}

export interface MoviePartialState {
  readonly [MOVIE_FEATURE_KEY]: State;
}

export const movieAdapter: EntityAdapter<Movie> = createEntityAdapter<Movie>();

export const initialState: State = movieAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const movieReducer = createReducer(
  initialState,
  on(MovieActions.loadMovie, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(MovieActions.loadMovieSuccess, (state, { movie }) =>
    movieAdapter.upsertMany(movie, { ...state, loaded: true })
  ),
  on(MovieActions.loadMovieFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return movieReducer(state, action);
}
