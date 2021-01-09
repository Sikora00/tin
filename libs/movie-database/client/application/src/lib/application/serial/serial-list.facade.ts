import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serial } from '@tin/movie-database/domain';
import { SerialDataService } from '../../infrastructure/serial/serial.data.service';
import { SerialQuery } from '../../+state/serial/serial.query';

@Injectable()
export class SerialListFacade {
  constructor(
    private serialDataService: SerialDataService,
    private serialQuery: SerialQuery
  ) {}

  async init(presenter: SerialListPresenter): Promise<void> {
    presenter.displayLoading();
    await this.serialDataService.load().toPromise();
    presenter.displayList(this.serialQuery.serials$);
  }
}

export interface SerialListPresenter {
  displayLoading(): void;

  displayList(serials: Observable<Serial[]>): void;
}
