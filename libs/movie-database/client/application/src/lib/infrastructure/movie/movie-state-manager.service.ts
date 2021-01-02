import { Injectable } from '@angular/core';
import { MovieQuery } from '../../+state/movie/movie.query';
import { MovieStore } from '../../+state/movie/movie.store';
import { CastMemberStore } from '../../+state/cast-member/cast-member.store';
import { ActorStore } from '../../+state/actor/actor.store';
import { Observable, of } from 'rxjs';
import {
  CastMember,
  EditMovieWriteModel,
  Movie,
  MovieId,
} from '@tin/movie-database/domain';
import { CastMemberQuery } from '../../+state/cast-member/cast-member.query';

@Injectable({ providedIn: 'root' })
export class MovieStateManagerService {
  constructor(
    private movieQuery: MovieQuery,
    private movieStore: MovieStore,
    private castMemberQuery: CastMemberQuery,
    private castMemberStore: CastMemberStore,
    private actorStore: ActorStore
  ) {}

  getEntityOnce(movieId: MovieId): Observable<Movie> {
    return of(this.movieQuery.getEntity(movieId));
  }

  addMovie(movie: Movie, actors: CastMember[]): Observable<Movie> {
    this.movieStore.add(movie as Movie);
    this.castMemberStore.add(actors as CastMember[]);
    this.actorStore.update(
      (entity) => !!actors.find((c) => c.actor === entity.id),
      (entity) => ({
        movies: entity.movies.concat([
          actors.find((c) => c.actor === entity.id).id,
        ]),
      })
    );
    return of(movie as Movie);
  }

  editMovie(payload: EditMovieWriteModel): Observable<Movie> {
    const oldMovie = this.movieQuery.getEntity(payload.id);
    this.castMemberStore.remove(oldMovie.actors);
    const castMembers = payload.actors.map((castMember) => ({
      ...castMember,
      movie: payload.id,
      id: Math.floor(Math.random() * (9999 - 1000)) + 1000,
    }));
    const newMovie = {
      ...payload,
      actors: castMembers.map((castMember) => castMember.id),
    };
    this.movieStore.update(payload.id, newMovie);
    this.castMemberStore.add(castMembers);
    this.actorStore.update(
      (entity) =>
        !!castMembers.find((c) => c.actor === entity.id) ||
        entity.movies.some((id) => oldMovie.actors.includes(id)),
      (entity) => ({
        movies: entity.movies
          .filter((id) => oldMovie.actors.includes(id))
          .concat(
            castMembers.filter((c) => c.actor === entity.id).map((x) => x.id)
          ),
      })
    );
    return of(newMovie);
  }

  remember(movies: Movie[]): void {
    this.movieStore.add(movies);
  }

  deleteMovie(movieId: MovieId): void {
    const movie = this.movieQuery.getEntity(movieId);
    const castMembers = this.castMemberQuery
      .getAll()
      .filter((castMember) => movie.actors.includes(castMember.id));
    this.actorStore.update(
      castMembers.map((castMember) => castMember.actor),
      (entity) => ({
        movies: entity.movies.filter(
          (id) => !castMembers.map((castMember) => castMember.id).includes(id)
        ),
      })
    );
    this.castMemberStore.remove(castMembers.map((castMember) => castMember.id));
    this.movieStore.remove(movieId);
  }
}
