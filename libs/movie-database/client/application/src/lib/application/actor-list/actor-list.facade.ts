import { Injectable, OnDestroy } from '@angular/core';
import { ActorQuery } from '../../+state/actor/actor.query';
import { Actor } from '@tin/movie-database/domain';
import { Observable, Subscription } from 'rxjs';
import { LoadActorsService } from './load-actors/load-actors.service';
import { AuthApiFacade } from '../../../../../../../auth/client/application/src/lib/application/auth-api.facade';

@Injectable()
export class ActorListFacade implements OnDestroy {
  private sub: Subscription;

  constructor(
    private query: ActorQuery,
    private loadActorsService: LoadActorsService,
    private authApiFacade: AuthApiFacade
  ) {}

  async init(presenter: ActorListPresenter): Promise<void> {
    presenter.displayLoading();
    await this.loadActorsService.execute();
    presenter.displayList(this.query.actors$);
    this.sub = this.authApiFacade.isUserLogged$.subscribe((isUserLogged) => {
      if (isUserLogged) {
        presenter.displayAddActor();
        presenter.displayDeleteActor();
      } else {
        presenter.hideAddActor();
        presenter.hideDeleteActor();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

export interface ActorListPresenter {
  displayLoading(): void;
  displayList(actors$: Observable<Actor[]>): void;

  displayAddActor(): void;

  displayDeleteActor(): void;

  hideDeleteActor(): void;

  hideAddActor(): void;
}
