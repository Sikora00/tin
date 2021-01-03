import { SerialState, SerialStore } from './serial.store';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SerialQuery extends QueryEntity<SerialState> {
  serials$ = this.selectAll();
  selectedSerial$ = this.selectActive();
  constructor(protected store: SerialStore) {
    super(store);
  }
}
