import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { CastMember } from '../../domain/entities/cast-member';
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
