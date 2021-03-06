import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { CastMember } from '@tin/movie-database/domain';
import { Injectable } from '@angular/core';

export interface CastMemberState extends EntityState<CastMember, number> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'castMember' })
export class CastMemberStore extends EntityStore<CastMemberState> {
  constructor() {
    super();
  }
}
