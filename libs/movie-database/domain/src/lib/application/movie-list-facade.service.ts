import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';
import { loadMovie } from '../+state/movie/movie.actions';

import * as fromMovie from '../+state/movie/movie.reducer';
import * as MovieSelectors from '../+state/movie/movie.selectors';

@Injectable({ providedIn: 'root' })
export class MovieListFacade {
  loaded$ = this.store.pipe(select(MovieSelectors.getMovieLoaded));
  movieList$ = this.store.pipe(select(MovieSelectors.getAllMovie));
  selectedMovie$ = this.store.pipe(select(MovieSelectors.getSelected));

  constructor(private store: Store<fromMovie.MoviePartialState>) {}

  loadMovies() {
    this.store.dispatch(loadMovie());
  }
}
