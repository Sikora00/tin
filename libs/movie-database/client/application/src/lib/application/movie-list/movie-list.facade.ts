import { Injectable, OnDestroy } from '@angular/core';
import { MovieQuery } from '../../+state/movie/movie.query';
import { Observable, Subscription } from 'rxjs';
import { Movie } from '@tin/movie-database/domain';
import { LoadMoviesService } from './load-movies/load-movies.service';
import { AuthApiFacade } from '../../../../../../../auth/client/application/src/lib/application/auth-api.facade';

@Injectable()
export class MovieListFacade implements OnDestroy {
  private sub: Subscription;

  constructor(
    private query: MovieQuery,
    private loadMoviesService: LoadMoviesService,
    private authApiFacade: AuthApiFacade
  ) {}

  async init(presenter: MovieListPresenter): Promise<void> {
    presenter.displayLoading();
    await this.loadMoviesService.execute();
    presenter.displayMovieList(this.query.movies$);
    this.sub = this.authApiFacade.isUserLogged$.subscribe((isUserLogged) => {
      if (isUserLogged) {
        presenter.displayAddMovie();
        presenter.displayDeleteMovie();
      } else {
        presenter.hideAddMovie();
        presenter.hideDeleteMovie();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

export interface MovieListPresenter {
  displayLoading(): void;

  displayMovieList(movies: Observable<Movie[]>): void;

  displayAddMovie(): void;

  displayDeleteMovie(): void;

  hideAddMovie(): void;

  hideDeleteMovie(): void;
}
