import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  ActorAddFacade,
  ActorAddPresenterInterface,
  AddActorForm,
} from '@tin/movie-database/client/application';
import { SnackbarService } from '@tin/shared/ui-snackbar';

@Component({
  selector: 'movie-database-actor-add',
  templateUrl: './actor-add.component.html',
  styleUrls: ['./actor-add.component.scss'],
  host: { class: 'feature-movie-database' },
  providers: [ActorAddFacade],
})
export class ActorAddComponent implements OnInit, ActorAddPresenterInterface {
  form: AddActorForm;

  constructor(
    private actorAddFacade: ActorAddFacade,
    private notificationService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.actorAddFacade.init(this);
  }

  onSubmit(): void {
    this.actorAddFacade.onFormSubmit(this, this.form);
  }

  displayForm(form: AddActorForm): void {
    this.form = form;
  }

  displayActorAddedNotification(): void {
    this.notificationService.displayNotification(`Dodano aktora`);
  }
}
