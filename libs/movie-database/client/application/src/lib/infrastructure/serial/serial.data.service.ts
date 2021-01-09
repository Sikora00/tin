import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  ActorId,
  Serial,
  SerialAddWriteModel,
  SerialCastMember,
  SerialEditWriteModel,
  SerialId,
  SerialWithActorsReadModel,
} from '@tin/movie-database/domain';
import { map, switchMap, tap } from 'rxjs/operators';
import { SerialHttpService } from './serial-http.service';
import { SerialStateManagerService } from './serial-state-manager.service';
import { SerialCastMemberStore } from '../../+state/serial-cast-member/serial-cast-member.store';

@Injectable({ providedIn: 'root' })
export class SerialDataService {
  constructor(
    private serialHttpService: SerialHttpService,
    private serialStateManagerService: SerialStateManagerService,
    private castMemberStateManagerService: SerialCastMemberStore
  ) {
    this.rememberResponse = this.rememberResponse.bind(this);
  }

  load(): Observable<Serial[]> {
    return this.serialHttpService
      .get<SerialWithActorsReadModel[]>({ skipWrite: true })
      .pipe(this.rememberResponse);
  }

  getSingleOnce(serialId: SerialId): Observable<Serial> {
    return this.serialStateManagerService.getEntityOnce(serialId).pipe(
      switchMap((maybeSerial) => {
        if (!maybeSerial) {
          return this.serialHttpService
            .get<SerialWithActorsReadModel>(serialId, { skipWrite: true })
            .pipe(
              this.rememberResponse,
              map((serials) => serials[0])
            );
        }
        return of(maybeSerial);
      })
    );
  }

  addSerial(value: SerialAddWriteModel): Observable<Serial> {
    return this.serialHttpService
      .add<SerialWithActorsReadModel>(value as any, { skipWrite: true })
      .pipe(
        map((response) => this.serialHttpService.normalize(response)),
        map(({ serial, actors }) => ({
          actors,
          serial: Object.values(serial)[0],
        })),
        tap(({ serial, actors }) => {
          this.serialStateManagerService.addSerial(
            serial,
            Object.values(actors)
          );
        }),
        map(({ serial }) => serial)
      );
  }

  editSerial(id: SerialId, payload: SerialEditWriteModel): Observable<Serial> {
    let actors: Record<ActorId, SerialCastMember>;
    return this.serialHttpService
      .update<Serial>(id, (payload as unknown) as Serial, {
        mapResponseFn: (res) => {
          const data = this.serialHttpService.normalize(res);
          actors = data.actors;
          return data.serial[id];
        },
      })
      .pipe(
        tap((serial) =>
          this.serialStateManagerService.editSerial(
            serial,
            Object.values(actors)
          )
        )
      );
  }

  deleteSerial(serialId: SerialId): Observable<unknown> {
    return this.serialHttpService
      .delete(serialId)
      .pipe(tap(() => this.serialStateManagerService.deleteSerial(serialId)));
  }

  private rememberResponse(
    response$: Observable<
      SerialWithActorsReadModel | SerialWithActorsReadModel[]
    >
  ): Observable<Serial[]> {
    return response$.pipe(
      map((res) => this.serialHttpService.normalize(res)),
      tap((entities) => {
        this.serialStateManagerService.remember(Object.values(entities.serial));
        this.castMemberStateManagerService.add(Object.values(entities.actors));
      }),
      map((entities) => Object.values(entities.serial))
    );
  }
}
