import { Injectable } from '@angular/core';
import { ActorQuery } from '../+state/actor/actor.query';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActorId, ActorProps } from '@tin/movie-database/domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActorDataService } from '../infrastructure/actor/actor.data.service';
import { ActorStore } from '../+state/actor/actor.store';
import { Router } from '@angular/router';
import { ActorService } from './services/actor.service';

@Injectable()
export class ActorEditFacade {
  constructor(
    private actorService: ActorService,
    private actorQuery: ActorQuery,
    private fb: FormBuilder,
    private dataService: ActorDataService,
    private actorStore: ActorStore,
    private router: Router
  ) {}

  async init(presenter: ActorEditPresenter, actorId: ActorId): Promise<void> {
    presenter.displayLoading();
    presenter.displayForm(await this.getActorForm(actorId).toPromise());
  }

  async onFormSubmit(
    presenter: ActorEditPresenter,
    id: ActorId,
    value: ActorProps
  ): Promise<void> {
    await this.dataService.editActor(id, value).toPromise();
    presenter.displayEditSuccessNotification();
    await this.router.navigate(['movie-database', 'actor', id]);
  }

  private getActorForm(actorId: ActorId): Observable<EditActorForm> {
    return this.actorService.getAndSelectActor(actorId).pipe(
      map(
        (actor) =>
          this.fb.group({
            name: [actor.name, Validators.required],
            surname: [actor.surname, Validators.required],
            thumbnailUrl: [actor.thumbnailUrl, Validators.required],
            biography: [actor.biography, Validators.required],
          }) as EditActorForm
      )
    );
  }
}

export interface ActorEditPresenter {
  displayForm(form: EditActorForm): void;

  displayLoading(): void;

  displayEditSuccessNotification(): void;
}

export interface EditActorForm extends FormGroup {
  controls: {
    [P in keyof ActorProps]: AbstractControl;
  };

  value: ActorProps;
}
