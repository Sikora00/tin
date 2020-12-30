import { Injectable } from '@angular/core';
import { Movie } from '../../domain/entities/movie';
import { ActorStore } from '../../+state/actor/actor.store';
import { ActorQuery } from '../../+state/actor/actor.query';
import { combineLatest, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getMovieEntities } from '../../+state/movie/movie.selectors';
import { filter, map } from 'rxjs/operators';
import { Actor } from '../../domain/entities/actor';
import { LoadActorPreviewDataService } from './load-actor-preview-data/load-actor-preview-data.service';
import { Dictionary } from '@ngrx/entity';
import { CastMemberQuery } from '../../+state/cast-member/cast-member.query';
import { CastMemberId } from '../../domain/value-objects/cast-member-id.value-object';
import { ActorId, CastMember } from '@tin/movie-database/domain';

export interface ActorPreview {
  id: number;
  name: string;
  surname: string;
  thumbnailUrl: string;
  biography: string;
  movies: { id: number; movie: Omit<Movie, 'castMemberIds'> }[];
}

@Injectable()
export class ActorPreviewFacade {
  constructor(
    private actorQuery: ActorQuery,
    private actorStore: ActorStore,
    private castMemberQuery: CastMemberQuery,
    private loadActorPreviewDataService: LoadActorPreviewDataService,
    private store: Store
  ) {}

  async init(
    presenter: PreviewActorPresenterInterface,
    actorId: ActorId
  ): Promise<void> {
    presenter.displayLoading();
    await this.loadActorPreviewDataService.execute(actorId);
    presenter.displayActorData(this.getActorPreviewData());
  }

  private getActorPreviewData(): Observable<ActorPreview> {
    return combineLatest([
      (this.actorQuery.selectedActor$ as Observable<Actor>).pipe(
        filter(Boolean)
      ),
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
  }
}

export interface PreviewActorPresenterInterface {
  displayActorData(data: Observable<ActorPreview>): void;

  displayLoading(): void;
}
