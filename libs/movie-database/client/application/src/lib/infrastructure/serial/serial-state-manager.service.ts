import { Injectable } from '@angular/core';
import { ActorStore } from '../../+state/actor/actor.store';
import { Observable, of } from 'rxjs';
import { Serial, SerialCastMember, SerialId } from '@tin/movie-database/domain';
import { SerialQuery } from '../../+state/serial/serial.query';
import { SerialStore } from '../../+state/serial/serial.store';
import { SerialCastMemberQuery } from '../../+state/serial-cast-member/serial-cast-member.query';
import { SerialCastMemberStore } from '../../+state/serial-cast-member/serial-cast-member.store';

@Injectable({ providedIn: 'root' })
export class SerialStateManagerService {
  constructor(
    private serialQuery: SerialQuery,
    private serialStore: SerialStore,
    private castMemberQuery: SerialCastMemberQuery,
    private castMemberStore: SerialCastMemberStore,
    private actorStore: ActorStore
  ) {}

  getEntityOnce(id: SerialId): Observable<Serial> {
    return of(this.serialQuery.getEntity(id));
  }

  addSerial(serial: Serial, actors: SerialCastMember[]): Observable<Serial> {
    this.serialStore.add(serial as Serial);
    this.castMemberStore.add(actors as SerialCastMember[]);
    this.actorStore.update(
      (entity) => !!actors.find((c) => c.actor === entity.id),
      (entity) => ({
        movies: entity.movies.concat([
          actors.find((c) => c.actor === entity.id).id,
        ]),
      })
    );
    return of(serial as Serial);
  }

  editSerial(movie: Serial, castMembers: SerialCastMember[]): void {
    const oldSerial = this.serialQuery.getEntity(movie.id);
    this.castMemberStore.remove(oldSerial.actors);
    this.castMemberStore.add(castMembers);
    this.actorStore.update(
      (entity) =>
        !!castMembers.find((c) => c.actor === entity.id) ||
        entity.movies.some((id) => oldSerial.actors.includes(id)),
      (entity) => ({
        movies: entity.movies
          .filter((id) => oldSerial.actors.includes(id))
          .concat(
            castMembers.filter((c) => c.actor === entity.id).map((x) => x.id)
          ),
      })
    );
  }

  remember(serials: Serial[]): void {
    this.serialStore.add(serials);
  }

  deleteSerial(id: SerialId): void {
    const serial = this.serialQuery.getEntity(id);
    const castMembers = this.castMemberQuery
      .getAll()
      .filter((castMember) => serial.actors.includes(castMember.id));
    this.actorStore.update(
      castMembers.map((castMember) => castMember.actor),
      (entity) => ({
        movies: entity.movies.filter(
          (id) => !castMembers.map((castMember) => castMember.id).includes(id)
        ),
      })
    );
    this.castMemberStore.remove(castMembers.map((castMember) => castMember.id));
    this.serialStore.remove(id);
  }
}
