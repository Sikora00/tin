import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as MovieActions from './movie.actions';
import { MovieDataService } from '../../infrastructure/movie.data.service';

@Injectable()
export class MovieEffects {
  loadMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMovie),
      switchMap((action) =>
        this.movieDataService.load().pipe(
          map((movie) => MovieActions.loadMovieSuccess({ movie })),
          catchError((error) => of(MovieActions.loadMovieFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private movieDataService: MovieDataService
  ) {}
}
