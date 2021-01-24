import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Serial } from '@tin/movie-database/domain';
import { SerialDataService } from '../../infrastructure/serial/serial.data.service';
import { SerialQuery } from '../../+state/serial/serial.query';
import { AuthApiFacade } from '../../../../../../../auth/client/application/src/lib/application/auth-api.facade';

@Injectable()
export class SerialListFacade implements OnDestroy {
  private sub: Subscription;
  constructor(
    private serialDataService: SerialDataService,
    private serialQuery: SerialQuery,
    private authApiFacade: AuthApiFacade
  ) {}

  async init(presenter: SerialListPresenter): Promise<void> {
    presenter.displayLoading();
    await this.serialDataService.load().toPromise();
    presenter.displayList(this.serialQuery.serials$);
    this.sub = this.authApiFacade.isUserLogged$.subscribe((isUserLogged) => {
      if (isUserLogged) {
        presenter.displayAddSerial();
        presenter.displayDeleteSerial();
      } else {
        presenter.hideAddSerial();
        presenter.hideDeleteSerial();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

export interface SerialListPresenter {
  displayLoading(): void;

  displayList(serials: Observable<Serial[]>): void;

  displayAddSerial(): void;

  displayDeleteSerial(): void;

  hideAddSerial(): void;

  hideDeleteSerial(): void;
}
