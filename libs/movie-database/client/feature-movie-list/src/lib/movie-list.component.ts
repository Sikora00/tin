import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  MovieDeleteFacade,
  MovieListFacade,
  MovieListPresenter,
} from '@tin/movie-database/client/application';
import { Observable } from 'rxjs';
import { Movie, MovieId } from '@tin/movie-database/domain';

@Component({
  selector: 'movie-database-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-movie-database' },
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
