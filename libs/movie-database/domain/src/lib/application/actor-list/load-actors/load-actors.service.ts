import { Injectable } from '@angular/core';
import { ActorDataService } from '../../../infrastructure/actor.data.service';
import { ActorStore } from '../../../+state/actor/actor.store';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoadActorsService {
  constructor(
    private dataService: ActorDataService,
    private actorStore: ActorStore
  ) {}

  execute(): Promise<any> {
    return this.dataService
      .load()
      .pipe(tap((actors) => this.actorStore.add(actors)))
      .toPromise();
  }
}
