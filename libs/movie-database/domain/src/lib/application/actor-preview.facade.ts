import { Injectable } from '@angular/core';
import { Movie } from '../domain/entities/movie';
import { ActorStore } from '../+state/actor/actor.store';
import { ActorQuery } from '../+state/actor/actor.query';
import { PreviewActorCommand } from './commands/preview-actor/preview-actor.command';
import { CommandBus, CommandHandler } from '@valueadd/ng-cqrs';
import { combineLatest, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getMovieEntities } from '../+state/movie/movie.selectors';
import { filter, map } from 'rxjs/operators';
import { Actor } from '../domain/entities/actor';
import { PreviewActorHandler } from './commands/preview-actor/preview-actor.handler';
import { Dictionary } from '@ngrx/entity';
import { CastMemberQuery } from '../+state/cast-member/cast-member.query';
import { CastMemberId } from '../domain/value-objects/cast-member-id.value-object';
import { CastMember } from '../..';

export interface ActorPreview {
  id: number;
  name: string;
  surname: string;
  thumbnailUrl: string;
  biography: string;
  movies: { id: number; movie: Omit<Movie, 'castMemberIds'> }[];
}

@Injectable({ providedIn: 'root' })
export class ActorPreviewFacade {
  selectedActor$ = combineLatest([
    (this.actorQuery.selectedActor$ as Observable<Actor>).pipe(filter(Boolean)),
    this.castMemberQuery.selectAll({ asObject: true }),
    this.store.pipe(select(getMovieEntities)),
  ]).pipe(
    map(
      ([actor, castMembers, movies]: [
        Actor,
        Record<CastMemberId, CastMember>,
        Dictionary<Movie>
      ]) => {
        return {
          ...actor,
          movies: actor.movies.map((castMemberId) => ({
            id: castMemberId,
            role: castMembers[castMemberId].role,
            movie: movies[castMembers[castMemberId].movie],
          })),
        };
      }
    )
  );

  constructor(
    private actorQuery: ActorQuery,
    private actorStore: ActorStore,
    private castMemberQuery: CastMemberQuery,
    private commandBus: CommandBus,
    private store: Store
  ) {
    CommandHandler(PreviewActorCommand)(PreviewActorHandler);
  }

  previewActor(command: PreviewActorCommand): Promise<unknown> {
    return this.commandBus.execute(command);
  }
}
