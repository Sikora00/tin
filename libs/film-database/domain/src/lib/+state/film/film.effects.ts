import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as FilmActions from './film.actions';
import { FilmDataService } from '../../infrastructure/film.data.service';

@Injectable()
export class FilmEffects {
  loadFilm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FilmActions.loadFilm),
      switchMap((action) =>
        this.filmDataService.load().pipe(
          map((film) => FilmActions.loadFilmSuccess({ film })),
          catchError((error) => of(FilmActions.loadFilmFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private filmDataService: FilmDataService
  ) {}
}
