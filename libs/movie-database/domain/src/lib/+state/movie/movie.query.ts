import { MovieState, MovieStore } from './movie.store';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MovieQuery extends QueryEntity<MovieState> {
  movies$ = this.selectAll();
  selectedMovie$ = this.selectActive();
  constructor(protected store: MovieStore) {
    super(store);
  }
}
