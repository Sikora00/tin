import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import {Movie, Serial} from '@tin/movie-database/domain';
import { Injectable } from '@angular/core';

export interface SerialState extends EntityState<Serial, number> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'serial' })
export class SerialStore extends EntityStore<SerialState> {
  constructor() {
    super();
  }
}
