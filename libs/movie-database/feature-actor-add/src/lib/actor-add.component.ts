import { Component, OnInit } from '@angular/core';
import {
  ActorAddFacade,
  ActorAddPresenterInterface,
  AddActorForm,
} from '@tin/movie-database/domain';

@Component({
  selector: 'movie-database-actor-add',
  templateUrl: './actor-add.component.html',
  styleUrls: ['./actor-add.component.scss'],
  host: { class: 'feature-host' },
  providers: [ActorAddFacade],
})
export class ActorAddComponent implements OnInit, ActorAddPresenterInterface {
  form: AddActorForm;

  constructor(private actorAddFacade: ActorAddFacade) {}

  ngOnInit(): void {
    this.actorAddFacade.init(this);
  }

  onSubmit(): void {
    this.actorAddFacade.onFormSubmit(this.form);
  }

  displayForm(form: AddActorForm): void {
    this.form = form;
  }
}
