import { ActorStore } from '../../../+state/actor/actor.store';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { CastMemberDataService } from '../../../infrastructure/cast-member.data.service';
import { MovieDataService } from '../../../infrastructure/movie/movie.data.service';
import { forkJoin, of } from 'rxjs';
import { ActorService } from '../../services/actor.service';
import { ActorId } from '@tin/movie-database/domain';
import { SerialCastMemberDataService } from '../../../infrastructure/serial-cast-member.data.service';
import { SerialDataService } from '../../../infrastructure/serial/serial.data.service';

@Injectable({ providedIn: 'root' })
export class LoadActorPreviewDataService {
  constructor(
    private actorService: ActorService,
    private actorStore: ActorStore,
    private castMemberDataService: CastMemberDataService,
    private serialCastMemberDataService: SerialCastMemberDataService,
    private serialDataService: SerialDataService,
    private movieDataService: MovieDataService
  ) {}

  async execute(actorId: ActorId): Promise<void> {
    return this.actorService
      .getAndSelectActor(actorId)
      .pipe(
        switchMap((actor) => {
          return forkJoin([
            ...(actor.movies.length
              ? actor.movies.map((castMemberId) => {
                  return this.castMemberDataService
                    .loadSingle(castMemberId)
                    .pipe(
                      switchMap((castMember) =>
                        this.movieDataService.getSingleOnce(castMember.movie)
                      )
                    );
                })
              : [of([])]),
            ...(actor.serials.length
              ? actor.serials.map((castMemberId) => {
                  return this.serialCastMemberDataService
                    .loadSingle(castMemberId)
                    .pipe(
                      switchMap((castMember) =>
                        this.serialDataService.getSingleOnce(castMember.serial)
                      )
                    );
                })
              : [of([])]),
          ]);
        })
      )
      .toPromise()
      .then(() => {
        this.actorStore.setActive(actorId);
      });
  }
}
