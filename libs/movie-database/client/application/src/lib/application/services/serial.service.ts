import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Serial, SerialId } from '@tin/movie-database/domain';
import { SerialDataService } from '../../infrastructure/serial/serial.data.service';
import { SerialStore } from '../../+state/serial/serial.store';
import { SerialQuery } from '../../+state/serial/serial.query';

@Injectable({ providedIn: 'root' })
export class SerialService {
  constructor(
    private query: SerialQuery,
    private dataService: SerialDataService,
    private store: SerialStore
  ) {}

  getAndSelect(serialId: SerialId): Observable<Serial> {
    let serial: Observable<Serial>;
    if (this.query.hasEntity(serialId)) {
      serial = of(this.query.getEntity(serialId));
    } else {
      serial = this.dataService.getSingleOnce(serialId);
    }

    return serial.pipe(tap(() => this.store.setActive(serialId)));
  }
}
