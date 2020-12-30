import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActorProps } from '../../domain/entities/actor';
import { AddActorPayload } from './add-actor/add-actor.payload';
import { AddActorService } from './add-actor/add-actor.service';

@Injectable()
export class ActorAddFacade {
  private presenter: ActorAddPresenterInterface;
  constructor(
    private fb: FormBuilder,
    private addActorHandler: AddActorService
  ) {}

  init(presenter: ActorAddPresenterInterface): void {
    this.presenter = presenter;
    this.presenter.displayForm(this.getForm());
  }

  async onFormSubmit(form: AddActorForm): Promise<void> {
    if (form.valid) {
      const { name, surname, biography, thumbnailUrl } = form.value;
      return this.addActorHandler.execute(
        new AddActorPayload(name, surname, thumbnailUrl, biography)
      );
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
}
