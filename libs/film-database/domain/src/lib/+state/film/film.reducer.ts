import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as FilmActions from './film.actions';
import { Film } from '../../entities/film';

export const FILM_FEATURE_KEY = 'film';

export interface State extends EntityState<Film> {
  selectedId?: string | number; // which Film record has been selected
  loaded: boolean; // has the Film list been loaded
  error?: string | null; // last known error (if any)
}

export interface FilmPartialState {
  readonly [FILM_FEATURE_KEY]: State;
}

export const filmAdapter: EntityAdapter<Film> = createEntityAdapter<Film>();

export const initialState: State = filmAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const filmReducer = createReducer(
  initialState,
  on(FilmActions.loadFilm, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(FilmActions.loadFilmSuccess, (state, { film }) =>
    filmAdapter.upsertMany(film, { ...state, loaded: true })
  ),
  on(FilmActions.loadFilmFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return filmReducer(state, action);
}
