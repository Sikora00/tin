import { Injectable, OnDestroy } from '@angular/core';
import { LoadMoviePreviewDataService } from './load-movie-preview-data/load-movie-preview-data.service';
import { MoviePreviewPresenter } from './movie-preview-presenter.interface';
import { MoviePreviewQuery } from './movie-preview.query';
import { MovieId } from '@tin/movie-database/domain';
import { AuthApiFacade } from '../../../../../../../auth/client/application/src/lib/application/auth-api.facade';
import { Subscription } from 'rxjs';

@Injectable()
export class MoviePreviewFacade implements OnDestroy {
  private sub: Subscription;
  constructor(
    private loadMoviePreviewDataService: LoadMoviePreviewDataService,
    private moviePreviewQuery: MoviePreviewQuery,
    private authApiFacade: AuthApiFacade
  ) {}

  async init(
    presenter: MoviePreviewPresenter,
    movieId: MovieId
  ): Promise<void> {
    presenter.displayLoading();
    await this.loadMoviePreviewDataService.execute(movieId);
    presenter.displayPreview(this.moviePreviewQuery.moviePreview$);
    this.sub = this.authApiFacade.isUserLogged$.subscribe((isUserLogged) => {
      if (isUserLogged) {
        presenter.displayEditMovie();
      } else {
        presenter.hideEditMovie();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
