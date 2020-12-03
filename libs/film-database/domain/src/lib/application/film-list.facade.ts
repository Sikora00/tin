import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromFilm from '../+state/film/film.reducer';
import * as FilmSelectors from '../+state/film/film.selectors';

@Injectable({ providedIn: 'root' })
export class FilmListFacade {
  loaded$ = this.store.pipe(select(FilmSelectors.getFilmLoaded));
  filmList$ = this.store.pipe(select(FilmSelectors.getAllFilm));
  selectedFilm$ = this.store.pipe(select(FilmSelectors.getSelected));

  constructor(private store: Store<fromFilm.FilmPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
