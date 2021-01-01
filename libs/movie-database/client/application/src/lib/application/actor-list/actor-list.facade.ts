import { Injectable } from '@angular/core';
import { ActorQuery } from '../../+state/actor/actor.query';
import { Actor } from '@tin/movie-database/domain';
import { Observable } from 'rxjs';
import { LoadActorsService } from './load-actors/load-actors.service';

@Injectable()
export class ActorListFacade {
  presenter: ActorListPresenter;

  constructor(
    private query: ActorQuery,
    private loadActorsService: LoadActorsService
  ) {}

  async init(presenter: ActorListPresenter): Promise<void> {
    this.presenter = presenter;
    this.presenter.displayLoading();
    await this.loadActorsService.execute();
    this.presenter.displayList(this.query.actors$);
  }
}

export interface ActorListPresenter {
  displayLoading(): void;
  displayList(actors$: Observable<Actor[]>): void;
}
