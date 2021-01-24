import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  MovieDeleteFacade,
  MovieDeletePresenter,
  MovieListFacade,
  MovieListPresenter,
} from '@tin/movie-database/client/application';
import { Observable } from 'rxjs';
import { Movie, MovieId } from '@tin/movie-database/domain';
import { SnackbarService } from '@tin/shared/ui-snackbar';

@Component({
  selector: 'movie-database-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-movie-database' },
  providers: [MovieListFacade, MovieDeleteFacade],
})
export class MovieListComponent
  implements OnInit, MovieListPresenter, MovieDeletePresenter {
  movieList$: Observable<Movie[]>;
  loading: boolean;
  showAddMovie = false;
  showDeleteMovie = false;

  constructor(
    private movieListFacade: MovieListFacade,
    private movieDeleteFacade: MovieDeleteFacade,
    private cdR: ChangeDetectorRef,
    private notificationService: SnackbarService
  ) {}

  ngOnInit() {
    this.movieListFacade.init(this);
  }

  displayAddMovie(): void {
    this.showAddMovie = true;
    this.cdR.markForCheck();
  }

  displayDeleteMovie(): void {
    this.showDeleteMovie = true;
    this.cdR.markForCheck();
  }

  displayLoading(): void {
    this.loading = true;
  }

  displayMovieList(movies: Observable<Movie[]>): void {
    this.movieList$ = movies;
    this.loading = false;
    this.cdR.markForCheck();
  }

  hideAddMovie(): void {
    this.showAddMovie = false;
    this.cdR.markForCheck();
  }

  hideDeleteMovie(): void {
    this.showDeleteMovie = false;
    this.cdR.markForCheck();
  }

  onDeleteMovie(movieId: MovieId): void {
    this.movieDeleteFacade.deleteMovie(this, movieId);
  }

  displayMovieDeletedNotification(): void {
    this.notificationService.displayNotification('Usunięto film');
  }
}
