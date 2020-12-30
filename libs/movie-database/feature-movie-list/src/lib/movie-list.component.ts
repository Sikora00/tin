import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MovieListFacade } from '@tin/movie-database/domain';

@Component({
  selector: 'movie-database-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-host' },
})
export class MovieListComponent implements OnInit {
  movieList$ = this.movieListFacade.movieList$;

  constructor(private movieListFacade: MovieListFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.movieListFacade.loadMovies();
  }
}
