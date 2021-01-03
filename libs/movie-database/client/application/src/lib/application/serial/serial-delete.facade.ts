import {Injectable} from '@angular/core';
import {SerialId} from '@tin/movie-database/domain';
import {SerialDataService} from "../../infrastructure/serial/serial.data.service";

@Injectable()
export class SerialDeleteFacade {
  constructor(private dataService: SerialDataService) {}

  async deleteSerial(id: SerialId): Promise<void> {
    await this.dataService.deleteSerial(id).toPromise();
  }
}
