import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Movie, MovieId } from '@tin/movie-database/domain';
import { MovieQuery } from '../../+state/movie/movie.query';
import { MovieDataService } from '../../infrastructure/movie/movie.data.service';
import { MovieStore } from '../../+state/movie/movie.store';

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(
    private query: MovieQuery,
    private dataService: MovieDataService,
    private store: MovieStore
  ) {}

  getAndSelect(movieId: MovieId): Observable<Movie> {
    let movie: Observable<Movie>;
    if (this.query.hasEntity(movieId)) {
      movie = of(this.query.getEntity(movieId));
    } else {
      movie = this.dataService
        .getSingleOnce(movieId)
        .pipe(tap((m) => this.store.add(m)));
    }

    return movie.pipe(tap(() => this.store.setActive(movieId)));
  }
}
