import { Injectable } from '@angular/core';
import { ActorDataService } from '../../../infrastructure/actor/actor.data.service';

@Injectable({ providedIn: 'root' })
export class LoadActorsService {
  constructor(private dataService: ActorDataService) {}

  execute(): Promise<any> {
    return this.dataService.load().toPromise();
  }
}
