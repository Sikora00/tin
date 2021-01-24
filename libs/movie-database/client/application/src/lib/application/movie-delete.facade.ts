import { Injectable } from '@angular/core';
import { MovieId } from '@tin/movie-database/domain';
import { MovieDataService } from '../infrastructure/movie/movie.data.service';

@Injectable()
export class MovieDeleteFacade {
  constructor(private movieDataService: MovieDataService) {}

  async deleteMovie(
    presenter: MovieDeletePresenter,
    movieId: MovieId
  ): Promise<void> {
    if (confirm('Jesteś pewien?')) {
      await this.movieDataService.deleteMovie(movieId).toPromise();
      presenter.displayMovieDeletedNotification();
    }
  }
}

export interface MovieDeletePresenter {
  displayMovieDeletedNotification(): void;
}
