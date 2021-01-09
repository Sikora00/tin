import { CastMemberState, CastMemberStore } from './cast-member.store';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CastMemberQuery extends QueryEntity<CastMemberState> {
  constructor(protected store: CastMemberStore) {
    super(store);
  }
}
