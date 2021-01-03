import { Injectable } from '@angular/core';
import { combineQueries } from '@datorama/akita';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import {
  Actor,
  ActorId,
  CastMemberId,
  Serial,
  SerialCastMember,
} from '@tin/movie-database/domain';
import { SerialQuery } from '../../../+state/serial/serial.query';
import { SerialPreviewReadModel } from './serial-preview.read-model';
import { ActorQuery } from '../../../+state/actor/actor.query';
import { SerialCastMemberQuery } from '../../../+state/serial-cast-member/serial-cast-member.query';

@Injectable({ providedIn: 'root' })
export class SerialPreviewQuery {
  serialPreview$: Observable<SerialPreviewReadModel> = combineQueries([
    (this.serialQuery.selectedSerial$ as Observable<Serial>).pipe(
      filter(Boolean)
    ),
    this.castMemberQuery.selectAll({ asObject: true }),
    this.actorQuery.selectAll({ asObject: true }),
  ]).pipe(
    map(
      ([serial, castMembers, actors]: [
        Serial,
        Record<CastMemberId, SerialCastMember>,
        Record<ActorId, Actor>
      ]) => {
        return {
          ...serial,
          actors: serial.actors.map((castMemberId) => ({
            id: castMemberId,
            role: castMembers[castMemberId].role,
            actor: actors[castMembers[castMemberId].actor],
          })),
        };
      }
    )
  );
  constructor(
    private actorQuery: ActorQuery,
    private castMemberQuery: SerialCastMemberQuery,
    private serialQuery: SerialQuery
  ) {}
}
