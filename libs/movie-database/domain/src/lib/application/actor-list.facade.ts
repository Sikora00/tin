import { Injectable } from '@angular/core';
import { ActorQuery } from '../+state/actor/actor.query';
import { QueryBus } from '@valueadd/ng-cqrs';
import { LoadActorsQuery } from './queries/load-actors/load-actors.query';

@Injectable({ providedIn: 'root' })
export class ActorListFacade {
  actorList$ = this.query.actors$;

  constructor(private query: ActorQuery, private queryBus: QueryBus) {}

  loadActors(): Promise<unknown> {
    return this.queryBus.execute(new LoadActorsQuery());
  }
}
