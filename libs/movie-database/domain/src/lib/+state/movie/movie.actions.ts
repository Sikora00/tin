import { createAction, props } from '@ngrx/store';
import { Movie } from '../../entities/movie';

export const loadMovie = createAction('[Movie] Load Movie');

export const loadMovieSuccess = createAction(
  '[Movie] Load Movie Success',
  props<{ movie: Movie[] }>()
);

export const loadMovieFailure = createAction(
  '[Movie] Load Movie Failure',
  props<{ error: any }>()
);
