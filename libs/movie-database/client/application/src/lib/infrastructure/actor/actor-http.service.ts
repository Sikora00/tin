import { Injectable } from '@angular/core';
import {
  Actor,
  ActorId,
  ActorWithMoviesReadModel,
  CastMember,
  CastMemberId,
} from '@tin/movie-database/domain';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { normalize, schema } from 'normalizr';
import { ActorState, ActorStore } from '../../+state/actor/actor.store';

@Injectable({ providedIn: 'root' })
export class ActorHttpService extends NgEntityService<ActorState> {
  private readonly castMemberSchema = new schema.Entity('movies');
  private readonly actorSchema = new schema.Entity('actor', {
    movies: [this.castMemberSchema],
  });

  constructor(protected store: ActorStore) {
    super(store);
  }

  normalize(
    response: ActorWithMoviesReadModel | ActorWithMoviesReadModel[]
  ): {
    actor: Record<ActorId, Actor>;
    movies: Record<CastMemberId, CastMember>;
  } {
    const schema = Array.isArray(response)
      ? [this.actorSchema]
      : this.actorSchema;
    const { entities } = normalize<
      Actor,
      {
        actor: Record<ActorId, Actor>;
        movies: Record<CastMemberId, CastMember>;
      }
    >(response, schema);
    const { movies = {}, actor = {} } = entities;
    return { movies, actor };
  }
}
