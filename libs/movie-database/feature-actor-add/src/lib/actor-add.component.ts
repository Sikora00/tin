import { Component } from '@angular/core';
import { ActorAddFacade } from '@tin/movie-database/domain';
import { AddActorCommand } from '../../../domain/src/lib/application/commands/add-actor/add-actor.command';

@Component({
  selector: 'movie-database-actor-add',
  templateUrl: './actor-add.component.html',
  styleUrls: ['./actor-add.component.scss'],
  host: { class: 'feature-host' },
})
export class ActorAddComponent {
  form = this.actorAddFacade.getForm();

  constructor(private actorAddFacade: ActorAddFacade) {}

  onSubmit(): void {
    if (this.form.valid) {
      const { name, surname, biography, thumbnailUrl } = this.form.value;
      this.actorAddFacade.addActor(
        new AddActorCommand(name, surname, thumbnailUrl, biography)
      );
    }
  }
}
