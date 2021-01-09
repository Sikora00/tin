import { Injectable } from '@angular/core';
import { MovieQuery } from '../../+state/movie/movie.query';
import { Observable } from 'rxjs';
import { Movie } from '@tin/movie-database/domain';
import { LoadMoviesService } from './load-movies/load-movies.service';

@Injectable()
export class MovieListFacade {
  constructor(
    private query: MovieQuery,
    private loadMoviesService: LoadMoviesService
  ) {}

  async init(presenter: MovieListPresenter): Promise<void> {
    presenter.displayLoading();
    await this.loadMoviesService.execute();
    presenter.displayMovieList(this.query.movies$);
  }
}

export interface MovieListPresenter {
  displayLoading(): void;
  displayMovieList(movies: Observable<Movie[]>): void;
}
