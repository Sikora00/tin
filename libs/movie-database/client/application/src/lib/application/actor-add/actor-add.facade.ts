import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActorProps } from '@tin/movie-database/domain';
import { ActorDataService } from '../../infrastructure/actor/actor.data.service';
import { Router } from '@angular/router';

@Injectable()
export class ActorAddFacade {
  private presenter: ActorAddPresenterInterface;
  constructor(
    private fb: FormBuilder,
    private actorDataService: ActorDataService,
    private router: Router
  ) {}

  init(presenter: ActorAddPresenterInterface): void {
    this.presenter = presenter;
    this.presenter.displayForm(this.getForm());
  }

  async onFormSubmit(
    presenter: ActorAddPresenterInterface,
    form: AddActorForm
  ): Promise<void> {
    if (form.valid) {
      const actor = await this.actorDataService
        .addActor(form.value)
        .toPromise();
      presenter.displayActorAddedNotification();
      await this.router.navigate(['movie-database', 'actor', actor.id]);
    } else {
      form.markAllAsTouched();
      form.updateValueAndValidity();
    }
  }

  private getForm(): AddActorForm {
    return this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      thumbnailUrl: ['', Validators.required],
      biography: ['', Validators.required],
    }) as AddActorForm;
  }
}

export interface AddActorForm extends FormGroup {
  controls: {
    [P in keyof ActorProps]: AbstractControl;
  };

  value: ActorProps;
}

export interface ActorAddPresenterInterface {
  displayForm(form: AddActorForm): void;
  displayActorAddedNotification(): void;
}
