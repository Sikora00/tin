import {
  SerialCastMemberState,
  SerialCastMemberStore,
} from './serial-cast-member.store';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SerialCastMemberQuery extends QueryEntity<SerialCastMemberState> {
  constructor(protected store: SerialCastMemberStore) {
    super(store);
  }
}
