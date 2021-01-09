import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Movie } from '@tin/movie-database/domain';
import { Injectable } from '@angular/core';

export interface MovieState extends EntityState<Movie, number> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'movie' })
export class MovieStore extends EntityStore<MovieState> {
  constructor() {
    super();
  }
}
