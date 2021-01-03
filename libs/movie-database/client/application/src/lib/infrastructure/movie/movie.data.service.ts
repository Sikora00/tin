import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  ActorId,
  AddMovieWriteModel,
  CastMember,
  EditMovieWriteModel,
  Movie,
  MovieId,
  MovieWithActorsReadModel,
} from '@tin/movie-database/domain';
import { map, switchMap, tap } from 'rxjs/operators';
import { MovieHttpService } from './movie-http.service';
import { MovieStateManagerService } from './movie-state-manager.service';
import { CastMemberStore } from '../../+state/cast-member/cast-member.store';

@Injectable({ providedIn: 'root' })
export class MovieDataService {
  constructor(
    private movieHttpService: MovieHttpService,
    private movieStateManagerService: MovieStateManagerService,
    private castMemberStateManagerService: CastMemberStore
  ) {
    this.rememberResponse = this.rememberResponse.bind(this);
  }

  load(): Observable<Movie[]> {
    return this.movieHttpService
      .get<MovieWithActorsReadModel[]>({ skipWrite: true })
      .pipe(this.rememberResponse);
  }

  getSingleOnce(movieId: MovieId): Observable<Movie> {
    return this.movieStateManagerService.getEntityOnce(movieId).pipe(
      switchMap((maybeMovie) => {
        if (!maybeMovie) {
          return this.movieHttpService
            .get<MovieWithActorsReadModel>(movieId, { skipWrite: true })
            .pipe(
              this.rememberResponse,
              map((movies) => movies[0])
            );
        }
        return of(maybeMovie);
      })
    );
  }

  addMovie(value: AddMovieWriteModel): Observable<Movie> {
    return this.movieHttpService
      .add<MovieWithActorsReadModel>(value as any, { skipWrite: true })
      .pipe(
        map((response) => this.movieHttpService.normalize(response)),
        map(({ movie, actors }) => ({
          actors,
          movie: Object.values(movie)[0],
        })),
        tap(({ movie, actors }) => {
          this.movieStateManagerService.addMovie(movie, Object.values(actors));
        }),
        map(({ movie }) => movie)
      );
  }

  editMovie(id: MovieId, payload: EditMovieWriteModel): Observable<Movie> {
    let actors: Record<ActorId, CastMember>;
    return this.movieHttpService
      .update<Movie>(id, (payload as unknown) as Movie, {
        mapResponseFn: (res) => {
          const data = this.movieHttpService.normalize(res);
          actors = data.actors;
          return data.movie[id];
        },
      })
      .pipe(
        tap((movie) =>
          this.movieStateManagerService.editMovie(movie, Object.values(actors))
        )
      );
  }

  deleteMovie(movieId: MovieId): Observable<unknown> {
    return this.movieHttpService
      .delete(movieId)
      .pipe(tap(() => this.movieStateManagerService.deleteMovie(movieId)));
  }

  private rememberResponse(
    response$: Observable<MovieWithActorsReadModel | MovieWithActorsReadModel[]>
  ): Observable<Movie[]> {
    return response$.pipe(
      map((res) => this.movieHttpService.normalize(res)),
      tap((entities) => {
        this.movieStateManagerService.remember(Object.values(entities.movie));
        this.castMemberStateManagerService.add(Object.values(entities.actors));
      }),
      map((entities) => Object.values(entities.movie))
    );
  }
}
