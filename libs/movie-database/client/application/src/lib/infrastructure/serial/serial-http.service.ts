import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { SerialState, SerialStore } from '../../+state/serial/serial.store';
import {
  CastMember,
  CastMemberId,
  Serial,
  SerialCastMember,
  SerialId,
  SerialWithActorsReadModel,
} from '@tin/movie-database/domain';
import { normalize, schema } from 'normalizr';

@Injectable({ providedIn: 'root' })
export class SerialHttpService extends NgEntityService<SerialState> {
  private readonly castMemberSchema = new schema.Entity('actors');
  private readonly serialSchema = new schema.Entity('serial', {
    actors: [this.castMemberSchema],
  });

  constructor(protected store: SerialStore) {
    super(store);
  }

  normalize(
    response: SerialWithActorsReadModel | SerialWithActorsReadModel[]
  ): {
    actors: Record<CastMemberId, SerialCastMember>;
    serial: Record<SerialId, Serial>;
  } {
    const schema = Array.isArray(response)
      ? [this.serialSchema]
      : this.serialSchema;
    const { entities } = normalize<
      Serial,
      {
        actors: Record<CastMemberId, SerialCastMember>;
        serial: Record<SerialId, Serial>;
      }
    >(response, schema);
    const { serial = {}, actors = {} } = entities;
    return { serial, actors };
  }
}
