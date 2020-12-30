import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Actor } from '@tin/movie-database/domain';
import { Injectable } from '@angular/core';

export interface ActorState extends EntityState<Actor, number> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'actors' })
export class ActorStore extends EntityStore<ActorState> {
  constructor() {
    super();
  }
}
