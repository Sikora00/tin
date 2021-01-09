import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import {CastMember, SerialCastMember} from '@tin/movie-database/domain';
import { Injectable } from '@angular/core';

export interface CastMemberState extends EntityState<CastMember | SerialCastMember, number> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'castMember' })
export class CastMemberStore extends EntityStore<CastMemberState> {
  constructor() {
    super();
  }
}
