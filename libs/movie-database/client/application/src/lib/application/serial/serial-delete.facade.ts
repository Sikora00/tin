import { Injectable } from '@angular/core';
import { SerialId } from '@tin/movie-database/domain';
import { SerialDataService } from '../../infrastructure/serial/serial.data.service';

@Injectable()
export class SerialDeleteFacade {
  constructor(private dataService: SerialDataService) {}

  async deleteSerial(
    presenter: SerialDeletePresenter,
    id: SerialId
  ): Promise<void> {
    if (confirm('Jesteś pewien?')) {
      await this.dataService.deleteSerial(id).toPromise();
      presenter.displaySerialDeletedNotification();
    }
  }
}

export interface SerialDeletePresenter {
  displaySerialDeletedNotification(): void;
}
