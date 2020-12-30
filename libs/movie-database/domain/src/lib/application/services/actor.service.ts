import { Injectable } from '@angular/core';
import { ActorQuery } from '../../+state/actor/actor.query';
import { FormBuilder } from '@angular/forms';
import { ActorDataService } from '../../infrastructure/actor.data.service';
import { ActorStore } from '../../+state/actor/actor.store';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActorId } from '../../domain/value-objects/actor-id.value-object';
import { Actor } from '../../domain/entities/actor';

@Injectable({ providedIn: 'root' })
export class ActorService {
  constructor(
    private actorQuery: ActorQuery,
    private fb: FormBuilder,
    private dataService: ActorDataService,
    private actorStore: ActorStore,
    private router: Router
  ) {}

  getAndSelectActor(actorId: ActorId): Observable<Actor> {
    let actor: Observable<Actor>;
    if (this.actorQuery.hasEntity(actorId)) {
      actor = of(this.actorQuery.getEntity(actorId));
    } else {
      actor = this.dataService
        .loadSingle(actorId)
        .pipe(tap((actor) => this.actorStore.add(actor)));
    }

    return actor.pipe(tap(() => this.actorStore.setActive(actorId)));
  }
}
