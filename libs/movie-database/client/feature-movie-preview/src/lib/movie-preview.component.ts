import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  MoviePreview,
  MoviePreviewFacade,
  MoviePreviewPresenter,
} from '@tin/movie-database/client/application';
import { Observable } from 'rxjs';
import { MovieId } from '@tin/movie-database/domain';

@Component({
  selector: 'movie-database-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-movie-database' },
  providers: [MoviePreviewFacade],
})
export class MoviePreviewComponent implements OnInit, MoviePreviewPresenter {
  movieId: MovieId = +this.activatedRoute.snapshot.paramMap.get('id');
  movie$: Observable<MoviePreview>;
  loading: boolean;

  constructor(
    private moviePreviewFacade: MoviePreviewFacade,
    private activatedRoute: ActivatedRoute,
    private cdR: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.moviePreviewFacade.init(this, this.movieId);
  }

  displayLoading(): void {
    this.loading = true;
  }

  displayPreview(data: Observable<MoviePreview>): void {
    this.movie$ = data;
    this.loading = false;
    this.cdR.markForCheck();
  }
}
