import { Injectable } from '@angular/core';
import { IQueryHandler, QueryHandler } from '@valueadd/ng-cqrs';
import { LoadActorsQuery } from './load-actors.query';
import { ActorDataService } from '../../../infrastructure/actor.data.service';
import { ActorStore } from '../../../+state/actor/actor.store';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
@QueryHandler(LoadActorsQuery)
export class LoadActorsHandler implements IQueryHandler<LoadActorsQuery> {
  constructor(
    private dataService: ActorDataService,
    private actorStore: ActorStore
  ) {}
  handle(command: LoadActorsQuery): Promise<any> {
    return this.dataService
      .load()
      .pipe(tap((actors) => this.actorStore.add(actors)))
      .toPromise();
  }
}
