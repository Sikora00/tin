import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { MovieState, MovieStore } from '../../+state/movie/movie.store';
import {
  CastMember,
  CastMemberId,
  Movie,
  MovieId,
  MovieWithActorsReadModel,
} from '@tin/movie-database/domain';
import { normalize, schema } from 'normalizr';

@Injectable({ providedIn: 'root' })
export class MovieHttpService extends NgEntityService<MovieState> {
  private readonly castMemberSchema = new schema.Entity('actors');
  private readonly movieSchema = new schema.Entity('movie', {
    actors: [this.castMemberSchema],
  });

  constructor(protected store: MovieStore) {
    super(store);
  }

  normalize(
    response: MovieWithActorsReadModel | MovieWithActorsReadModel[]
  ): {
    actors: Record<CastMemberId, CastMember>;
    movie: Record<MovieId, Movie>;
  } {
    const schema = Array.isArray(response)
      ? [this.movieSchema]
      : this.movieSchema;
    const { entities } = normalize<
      Movie,
      {
        actors: Record<CastMemberId, CastMember>;
        movie: Record<MovieId, Movie>;
      }
    >(response, schema);
    return entities;
  }
}
