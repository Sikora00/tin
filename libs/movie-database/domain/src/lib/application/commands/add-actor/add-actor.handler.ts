import { CommandHandler, ICommandHandler } from '@valueadd/ng-cqrs';
import { AddActorCommand } from './add-actor.command';
import { ActorStore } from '../../../+state/actor/actor.store';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from '@tin/movie-database/domain';

@Injectable({ providedIn: 'root' })
@CommandHandler(AddActorCommand)
export class AddActorHandler implements ICommandHandler<AddActorCommand> {
  constructor(private store: ActorStore, private router: Router) {}
  async handle({
    name,
    surname,
    biography,
    thumbnailUrl,
  }: AddActorCommand): Promise<void> {
    const actor: Actor = {
      id: this.store.getValue().ids.length + 1,
      name,
      surname,
      biography,
      thumbnailUrl,
      movies: [],
    };
    this.store.add(actor);
    return this.router.navigate(['movie-database', 'actor']).then();
  }
}
