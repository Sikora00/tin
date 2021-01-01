import { ActorState, ActorStore } from './actor.store';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ActorQuery extends QueryEntity<ActorState> {
  actors$ = this.selectAll();
  selectedActor$ = this.selectActive();
  constructor(protected store: ActorStore) {
    super(store);
  }
}
