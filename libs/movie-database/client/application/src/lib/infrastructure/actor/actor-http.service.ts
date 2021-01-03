import { Injectable } from '@angular/core';
import {
  Actor,
  ActorId,
  ActorWithMoviesReadModel,
  CastMember,
  CastMemberId,
  SerialCastMember,
} from '@tin/movie-database/domain';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { normalize, schema } from 'normalizr';
import { ActorState, ActorStore } from '../../+state/actor/actor.store';

@Injectable({ providedIn: 'root' })
export class ActorHttpService extends NgEntityService<ActorState> {
  private readonly castMemberSchema = new schema.Entity('movies');
  private readonly serialCastMemberSchema = new schema.Entity('serials');
  private readonly actorSchema = new schema.Entity('actor', {
    movies: [this.castMemberSchema],
    serials: [this.serialCastMemberSchema],
  });

  constructor(protected store: ActorStore) {
    super(store);
  }

  normalize(
    response: ActorWithMoviesReadModel | ActorWithMoviesReadModel[]
  ): {
    actor: Record<ActorId, Actor>;
    movies: Record<CastMemberId, CastMember>;
    serials: Record<CastMemberId, SerialCastMember>;
  } {
    const schema = Array.isArray(response)
      ? [this.actorSchema]
      : this.actorSchema;
    const { entities } = normalize<
      Actor,
      {
        actor: Record<ActorId, Actor>;
        movies: Record<CastMemberId, CastMember>;
        serials: Record<CastMemberId, SerialCastMember>;
      }
    >(response, schema);
    const { movies = {}, actor = {}, serials = {} } = entities;
    return { movies, actor, serials };
  }
}
