import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../../domain/entities/movie';
import { MovieId } from '../../domain/value-objects/movie-id.value-object';
import { switchMap, tap } from 'rxjs/operators';
import { AddMoviePayload } from '../../application/movie-add/add-movie.payload';
import { EditMoviePayload } from '../../application/movie-edit/edit-movie.payload';
import { MovieHttpService } from './movie-http.service';
import { MovieStateManagerService } from './movie-state-manager.service';

@Injectable({ providedIn: 'root' })
export class MovieDataService {
  constructor(
    private movieHttpService: MovieHttpService,
    private movieStateManagerService: MovieStateManagerService
  ) {}

  load(): Observable<Movie[]> {
    return this.movieHttpService.load();
  }

  getSingleOnce(movieId: MovieId): Observable<Movie> {
    return this.movieStateManagerService.getEntityOnce(movieId).pipe(
      switchMap((maybeMovie) => {
        if (!maybeMovie) {
          return this.movieHttpService
            .loadSingle(movieId)
            .pipe(
              tap((movie) => this.movieStateManagerService.remember([movie]))
            );
        }
        return of(maybeMovie);
      })
    );
  }

  addMovie(value: AddMoviePayload): Observable<Movie> {
    return this.movieStateManagerService.addMovie(value); //@ToDo add http
  }

  editMovie(payload: EditMoviePayload): Observable<Movie> {
    return this.movieStateManagerService.editMovie(payload); //@ToDo add http
  }

  deleteMovie(movieId: MovieId): Observable<void> {
    return this.movieHttpService
      .deleteMovie(movieId)
      .pipe(tap(() => this.movieStateManagerService.deleteMovie(movieId)));
  }
}
