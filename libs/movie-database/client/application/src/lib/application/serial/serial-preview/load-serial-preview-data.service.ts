import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import { SerialId } from '@tin/movie-database/domain';
import { ActorDataService } from '../../../infrastructure/actor/actor.data.service';
import { SerialService } from '../../services/serial.service';
import { SerialStore } from '../../../+state/serial/serial.store';
import { SerialCastMemberDataService } from '../../../infrastructure/serial-cast-member.data.service';

@Injectable({ providedIn: 'root' })
export class LoadSerialPreviewDataService {
  constructor(
    private actorDataService: ActorDataService,
    private castMemberDataService: SerialCastMemberDataService,
    private serialService: SerialService,
    private serialStore: SerialStore
  ) {}

  async execute(serialId: SerialId): Promise<void> {
    return this.serialService
      .getAndSelect(serialId)
      .pipe(
        switchMap((serial) => {
          return forkJoin(
            serial.actors.length
              ? serial.actors.map((castMemberId) => {
                  return this.castMemberDataService
                    .loadSingle(castMemberId)
                    .pipe(
                      switchMap((castMember) =>
                        this.actorDataService.getSingleOnce(castMember.actor)
                      )
                    );
                })
              : of([])
          );
        })
      )
      .toPromise()
      .then(() => {
        this.serialStore.setActive(serialId);
      });
  }
}
