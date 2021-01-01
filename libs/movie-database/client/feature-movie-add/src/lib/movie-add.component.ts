import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  AddMovieForm,
  MovieAddFacade,
  MovieAddPresenterInterface,
} from '@tin/movie-database/client/application';
import { Observable } from 'rxjs';
import {Actor} from "@tin/movie-database/domain";

@Component({
  selector: 'movie-database-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-host' },
  providers: [MovieAddFacade],
})
export class MovieAddComponent implements OnInit, MovieAddPresenterInterface {
  actors$: Observable<Actor[]>;
  form: AddMovieForm;
  loading: boolean;
  constructor(
    private movieAddFacade: MovieAddFacade,
    private cdR: ChangeDetectorRef
  ) {}

  displayForm(form: AddMovieForm, actors: Observable<Actor[]>): void {
    this.form = form;
    this.actors$ = actors;
    this.loading = false;
    this.cdR.markForCheck();
  }

  displayLoading(): void {
    this.loading = true;
  }

  ngOnInit(): void {
    this.movieAddFacade.init(this);
  }

  onClickAddActor(): void {
    this.movieAddFacade.addActor(this.form);
  }

  onClickRemoveActor(actorIndex: number): void {
    this.movieAddFacade.removeActor(this.form, actorIndex);
  }

  onSubmit(): void {
    this.movieAddFacade.onSubmit(this.form);
  }
}
