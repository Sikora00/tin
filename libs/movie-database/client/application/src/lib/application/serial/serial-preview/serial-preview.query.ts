import {Injectable} from '@angular/core';
import {combineQueries} from '@datorama/akita';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {Actor, ActorId, CastMember, CastMemberId, Serial} from '@tin/movie-database/domain';
import {SerialQuery} from "../../../+state/serial/serial.query";
import {SerialPreviewReadModel} from "./serial-preview.read-model";
import {ActorQuery} from "../../../+state/actor/actor.query";
import {CastMemberQuery} from "../../../+state/cast-member/cast-member.query";

@Injectable({ providedIn: 'root' })
export class SerialPreviewQuery {
  serialPreview$: Observable<SerialPreviewReadModel> = combineQueries([
    (this.serialQuery.selectedSerial$ as Observable<Serial>).pipe(filter(Boolean)),
    this.castMemberQuery.selectAll({ asObject: true }),
    this.actorQuery.selectAll({ asObject: true }),
  ]).pipe(
    map(
      ([serial, castMembers, actors]: [
        Serial,
        Record<CastMemberId, CastMember>,
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
    private castMemberQuery: CastMemberQuery,
    private serialQuery: SerialQuery
  ) {}
}
