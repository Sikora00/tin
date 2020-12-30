import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Actor } from '../domain/entities/actor';
import { CommandBus } from '@valueadd/ng-cqrs';
import { AddActorCommand } from './commands/add-actor/add-actor.command';

@Injectable({ providedIn: 'root' })
export class ActorAddFacade {
  constructor(private fb: FormBuilder, private commandBus: CommandBus) {}

  getForm(): AddActorForm {
    return this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      thumbnailUrl: ['', Validators.required],
      biography: ['', Validators.required],
    }) as AddActorForm;
  }

  addActor(command: AddActorCommand): Promise<void> {
    return this.commandBus.execute(command);
  }
}

export interface AddActorForm extends FormGroup {
  controls: {
    name: AbstractControl;
    surname: AbstractControl;
    thumbnailUrl: AbstractControl;
    biography: AbstractControl;
  };

  value: {
    name: string;
    surname: string;
    thumbnailUrl: string;
    biography: string;
  };
}
