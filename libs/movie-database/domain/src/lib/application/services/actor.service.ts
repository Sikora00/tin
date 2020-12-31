import { Injectable } from '@angular/core';
import { ActorQuery } from '../../+state/actor/actor.query';
import { ActorDataService } from '../../infrastructure/actor/actor.data.service';
import { ActorStore } from '../../+state/actor/actor.store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActorId } from '../../domain/value-objects/actor-id.value-object';
import { Actor } from '../../domain/entities/actor';

@Injectable({ providedIn: 'root' })
export class ActorService {
  constructor(
    private actorQuery: ActorQuery,
    private dataService: ActorDataService,
    private actorStore: ActorStore
  ) {}

  getAndSelectActor(actorId: ActorId): Observable<Actor> {
    return this.dataService
      .getSingleOnce(actorId)
      .pipe(tap(() => this.actorStore.setActive(actorId)));
  }
}
