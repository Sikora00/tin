import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { SerialCastMember } from '@tin/movie-database/domain';
import { Injectable } from '@angular/core';

export interface SerialCastMemberState
  extends EntityState<SerialCastMember, number> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'serialCastMember' })
export class SerialCastMemberStore extends EntityStore<SerialCastMemberState> {
  constructor() {
    super();
  }
}
