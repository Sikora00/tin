import { Injectable } from '@angular/core';
import { MovieQuery } from '../../+state/movie/movie.query';
import { MovieStore } from '../../+state/movie/movie.store';
import { CastMemberStore } from '../../+state/cast-member/cast-member.store';
import { ActorStore } from '../../+state/actor/actor.store';
import { Observable, of } from 'rxjs';
import { MovieId } from '../../domain/value-objects/movie-id.value-object';
import { Movie } from '../../domain/entities/movie';
import { AddMoviePayload } from '../../application/movie-add/add-movie.payload';
import { EditMoviePayload } from '../../application/movie-edit/edit-movie.payload';
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

  addMovie(value: AddMoviePayload): Observable<Movie> {
    const movieId = this.movieStore.getValue().ids.length + 1;
    const castMembers = value.actors.map((castMember) => ({
      ...castMember,
      movie: movieId,
      id: Math.floor(Math.random() * (9999 - 1000)) + 1000,
    }));
    const movie = {
      ...value,
      id: movieId,
      actors: castMembers.map((c) => c.id),
    };
    this.movieStore.add(movie);
    this.castMemberStore.add(castMembers);
    this.actorStore.update(
      (entity) => !!castMembers.find((c) => c.actor === entity.id),
      (entity) => ({
        movies: entity.movies.concat([
          castMembers.find((c) => c.actor === entity.id).id,
        ]),
      })
    );
    return of(movie);
  }

  editMovie(payload: EditMoviePayload): Observable<Movie> {
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
