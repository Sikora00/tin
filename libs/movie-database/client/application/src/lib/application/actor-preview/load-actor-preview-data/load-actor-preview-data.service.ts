import { ActorStore } from '../../../+state/actor/actor.store';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { CastMemberDataService } from '../../../infrastructure/cast-member.data.service';
import { MovieDataService } from '../../../infrastructure/movie/movie.data.service';
import { forkJoin, of } from 'rxjs';
import { ActorService } from '../../services/actor.service';
import { ActorId } from '@tin/movie-database/domain';

@Injectable({ providedIn: 'root' })
export class LoadActorPreviewDataService {
  constructor(
    private actorService: ActorService,
    private actorStore: ActorStore,
    private castMemberDataService: CastMemberDataService,
    private movieDataService: MovieDataService
  ) {}

  async execute(actorId: ActorId): Promise<void> {
    return this.actorService
      .getAndSelectActor(actorId)
      .pipe(
        switchMap((actor) => {
          return forkJoin(
            actor.movies.length
              ? actor.movies.map((castMemberId) => {
                  return this.castMemberDataService
                    .loadSingle(castMemberId)
                    .pipe(
                      switchMap((castMember) =>
                        this.movieDataService.getSingleOnce(castMember.movie)
                      )
                    );
                })
              : of([])
          );
        })
      )
      .toPromise()
      .then(() => {
        this.actorStore.setActive(actorId);
      });
  }
}
