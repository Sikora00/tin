import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActorDataService } from '../../infrastructure/actor/actor.data.service';
import { MovieDataService } from '../../infrastructure/movie/movie.data.service';
import { Router } from '@angular/router';
import { MovieEditPresenterInterface } from './movie-edit-presenter.interface';
import { createEditMovieForm, EditMovieForm } from './edit-movie-form';
import { MovieId } from '@tin/movie-database/domain';
import { CastMemberDataService } from '../../infrastructure/cast-member.data.service';
import { of } from 'rxjs';

@Injectable()
export class MovieEditFacade {
  constructor(
    private fb: FormBuilder,
    private actorDataService: ActorDataService,
    private movieDataService: MovieDataService,
    private castMemberDataService: CastMemberDataService,
    private router: Router
  ) {}

  async init(
    presenter: MovieEditPresenterInterface,
    movieId: MovieId
  ): Promise<void> {
    presenter.displayLoading();
    const [actors, movie] = await Promise.all([
      this.actorDataService.load().toPromise(),
      this.movieDataService.getSingleOnce(movieId).toPromise(),
    ]);
    const castMembers = await Promise.all(
      movie.actors.map((castMemberId) =>
        this.castMemberDataService.loadSingle(castMemberId).toPromise()
      )
    );
    presenter.displayForm(
      createEditMovieForm(this.fb, movie, castMembers),
      of(actors)
    );
  }

  addActor(form: EditMovieForm): void {
    form.controls.actors.push(
      this.fb.group({
        actor: [null, Validators.required],
        role: [null, Validators.required],
      })
    );
  }

  removeActor(form: EditMovieForm, index: number): void {
    form.controls.actors.removeAt(index);
  }

  async onSubmit(form: EditMovieForm, movieId: MovieId): Promise<void> {
    if (form.valid) {
      await this.movieDataService
        .editMovie({
          ...form.value,
          id: movieId,
          actors: form.value.actors.map((actorValue) => ({
            ...actorValue,
            actor: +actorValue.actor,
          })),
        })
        .toPromise()
        .then();
      await this.router.navigate(['movie-database', 'movie', movieId]);
    } else {
      form.markAllAsTouched();
      form.updateValueAndValidity();
    }
  }
}
