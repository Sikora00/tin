import { Injectable } from '@angular/core';
import { Movie } from '../../domain/entities/movie';
import { Observable } from 'rxjs';
import { LoadActorPreviewDataService } from './load-actor-preview-data/load-actor-preview-data.service';
import { ActorId } from '../../domain/value-objects/actor-id.value-object';
import { ActorPreviewQuery } from './actor-preview.query';

export interface ActorPreview {
  id: number;
  name: string;
  surname: string;
  thumbnailUrl: string;
  biography: string;
  movies: { id: number; movie: Omit<Movie, 'castMemberIds'> }[];
}

@Injectable()
export class ActorPreviewFacade {
  constructor(
    private loadActorPreviewDataService: LoadActorPreviewDataService,
    private actorPreviewQuery: ActorPreviewQuery
  ) {}

  async init(
    presenter: PreviewActorPresenterInterface,
    actorId: ActorId
  ): Promise<void> {
    presenter.displayLoading();
    await this.loadActorPreviewDataService.execute(actorId);
    presenter.displayActorData(this.actorPreviewQuery.actorPreview$);
  }
}

export interface PreviewActorPresenterInterface {
  displayActorData(data: Observable<ActorPreview>): void;
  displayLoading(): void;
}
