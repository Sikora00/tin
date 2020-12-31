import { Injectable } from '@angular/core';
import { MovieId } from '../../domain/value-objects/movie-id.value-object';
import { LoadMoviePreviewDataService } from './load-movie-preview-data/load-movie-preview-data.service';
import { MoviePreviewPresenter } from './movie-preview-presenter.interface';
import { MoviePreviewQuery } from './movie-preview.query';

@Injectable()
export class MoviePreviewFacade {
  constructor(
    private loadMoviePreviewDataService: LoadMoviePreviewDataService,
    private moviePreviewQuery: MoviePreviewQuery
  ) {}

  async init(
    presenter: MoviePreviewPresenter,
    movieId: MovieId
  ): Promise<void> {
    presenter.displayLoading();
    await this.loadMoviePreviewDataService.execute(movieId);
    presenter.displayPreview(this.moviePreviewQuery.moviePreview$);
  }
}
