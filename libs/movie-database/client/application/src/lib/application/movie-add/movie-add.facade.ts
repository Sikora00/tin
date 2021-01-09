import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieAddPresenterInterface } from './movie-add-presenter.interface';
import { ActorDataService } from '../../infrastructure/actor/actor.data.service';
import { AddMovieForm, createAddMovieForm } from './add-movie-form';
import { MovieDataService } from '../../infrastructure/movie/movie.data.service';
import { Router } from '@angular/router';

@Injectable()
export class MovieAddFacade {
  constructor(
    private fb: FormBuilder,
    private actorDataService: ActorDataService,
    private movieDataService: MovieDataService,
    private router: Router
  ) {}

  async init(presenter: MovieAddPresenterInterface): Promise<void> {
    presenter.displayLoading();
    const actors = await this.actorDataService.load();
    presenter.displayForm(createAddMovieForm(this.fb), actors);
  }

  addActor(form: AddMovieForm): void {
    form.controls.actors.push(
      this.fb.group({
        actor: [null, Validators.required],
        role: [null, Validators.required],
      })
    );
  }

  removeActor(form: AddMovieForm, index: number): void {
    form.controls.actors.removeAt(index);
  }

  async onSubmit(form: AddMovieForm): Promise<void> {
    if (form.valid) {
      const movie = await this.movieDataService
        .addMovie({
          ...form.value,
          actors: form.value.actors.map((actorValue) => ({
            ...actorValue,
            actor: +actorValue.actor,
          })),
        })
        .toPromise()
        .then();
      await this.router.navigate(['movie-database', 'movie', movie.id]);
    } else {
      form.markAllAsTouched();
      form.updateValueAndValidity();
    }
  }
}
