import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  Movie,
  MovieId,
  MovieListFacade,
  MovieListPresenter,
} from '@tin/movie-database/domain';
import { Observable } from 'rxjs';
import { MovieDeleteFacade } from '../../../domain/src/lib/application/movie-delete.facade';

@Component({
  selector: 'movie-database-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-host' },
  providers: [MovieListFacade, MovieDeleteFacade],
})
export class MovieListComponent implements OnInit, MovieListPresenter {
  movieList$: Observable<Movie[]>;
  loading: boolean;

  constructor(
    private movieListFacade: MovieListFacade,
    private movieDeleteFacade: MovieDeleteFacade,
    private cdR: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.movieListFacade.init(this);
  }

  displayLoading(): void {
    this.loading = true;
  }

  displayMovieList(movies: Observable<Movie[]>): void {
    this.movieList$ = movies;
    this.loading = false;
    this.cdR.markForCheck();
  }

  onDeleteMovie(movieId: MovieId): void {
    this.movieDeleteFacade.deleteMovie(movieId);
  }
}
