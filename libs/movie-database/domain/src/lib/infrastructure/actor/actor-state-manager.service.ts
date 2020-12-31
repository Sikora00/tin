import { Injectable } from '@angular/core';
import { ActorStore } from '../../+state/actor/actor.store';
import { ActorQuery } from '../../+state/actor/actor.query';
import { CastMemberQuery } from '../../+state/cast-member/cast-member.query';
import { CastMemberStore } from '../../+state/cast-member/cast-member.store';
import { MovieStore } from '../../+state/movie/movie.store';
import { Actor, ActorId } from '@tin/movie-database/domain';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ActorStateManagerService {
  constructor(
    private actorStore: ActorStore,
    private actorQuery: ActorQuery,
    private castMemberQuery: CastMemberQuery,
    private castMemberStore: CastMemberStore,
    private movieStore: MovieStore
  ) {}

  getEntityOnce(actorId: ActorId): Observable<Actor> {
    return of(this.actorQuery.getEntity(actorId));
  }

  deleteActor(actorId: ActorId): void {
    const actor = this.actorQuery.getEntity(actorId);
    const castMembers = this.castMemberQuery
      .getAll()
      .filter((castMember) => actor.movies.includes(castMember.id));
    this.movieStore.update(
      castMembers.map((castMember) => castMember.movie),
      (entity) => ({
        actors: entity.actors.filter(
          (id) => !castMembers.map((castMember) => castMember.id).includes(id)
        ),
      })
    );
    this.castMemberStore.remove(castMembers.map((castMember) => castMember.id));
    this.actorStore.remove(actorId);
  }

  remember(actors: Actor[]): void {
    this.actorStore.add(actors);
  }
}
