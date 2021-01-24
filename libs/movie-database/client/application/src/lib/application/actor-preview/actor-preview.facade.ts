import { Injectable, OnDestroy } from '@angular/core';
import { ActorId, Movie, Serial } from '@tin/movie-database/domain';
import { Observable, Subscription } from 'rxjs';
import { LoadActorPreviewDataService } from './load-actor-preview-data/load-actor-preview-data.service';
import { ActorPreviewQuery } from './actor-preview.query';
import { MoviePreviewQuery } from '../movie-preview/movie-preview.query';
import { AuthApiFacade } from '../../../../../../../auth/client/application/src/lib/application/auth-api.facade';

export interface ActorPreview {
  id: number;
  name: string;
  surname: string;
  thumbnailUrl: string;
  biography: string;
  movies: { id: number; movie: Omit<Movie, 'actors'> }[];
  serials: { id: number; serial: Omit<Serial, 'actors'> }[];
}

@Injectable()
export class ActorPreviewFacade implements OnDestroy {
  private sub: Subscription;
  constructor(
    private loadActorPreviewDataService: LoadActorPreviewDataService,
    private actorPreviewQuery: ActorPreviewQuery,
    private authApiFacade: AuthApiFacade
  ) {}

  async init(
    presenter: PreviewActorPresenterInterface,
    actorId: ActorId
  ): Promise<void> {
    presenter.displayLoading();
    await this.loadActorPreviewDataService.execute(actorId);
    presenter.displayActorData(this.actorPreviewQuery.actorPreview$);
    this.sub = this.authApiFacade.isUserLogged$.subscribe((isUserLogged) => {
      if (isUserLogged) {
        presenter.displayEditActor();
      } else {
        presenter.hideEditActor();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

export interface PreviewActorPresenterInterface {
  displayActorData(data: Observable<ActorPreview>): void;
  displayLoading(): void;

  displayEditActor(): void;

  hideEditActor(): void;
}
