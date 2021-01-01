import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  EditMovieForm,
  MovieEditFacade,
  MovieEditPresenterInterface,
} from '@tin/movie-database/client/application';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {Actor, MovieId} from "@tin/movie-database/domain";

@Component({
  selector: 'movie-database-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-host' },
  providers: [MovieEditFacade],
})
export class MovieEditComponent implements OnInit, MovieEditPresenterInterface {
  actors$: Observable<Actor[]>;
  form: EditMovieForm;
  loading: boolean;
  movieId: MovieId = +this.activatedRoute.snapshot.paramMap.get('id');

  constructor(
    private activatedRoute: ActivatedRoute,
    private facade: MovieEditFacade,
    private cdR: ChangeDetectorRef
  ) {}

  displayForm(form: EditMovieForm, actors: Observable<Actor[]>): void {
    this.form = form;
    this.actors$ = actors;
    this.loading = false;
    this.cdR.markForCheck();
  }

  displayLoading(): void {
    this.loading = true;
  }

  ngOnInit(): void {
    this.facade.init(this, this.movieId);
  }

  onClickRemoveActor(actorIndex: number): void {
    this.facade.removeActor(this.form, actorIndex);
  }

  onClickAddActor(): void {
    this.facade.addActor(this.form);
  }

  onSubmit(): void {
    this.facade.onSubmit(this.form, this.movieId);
  }
}
