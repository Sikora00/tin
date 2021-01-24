import { Injectable } from '@angular/core';
import { ActorDataService } from '../infrastructure/actor/actor.data.service';
import { ActorId } from '@tin/movie-database/domain';

@Injectable()
export class ActorDeleteFacade {
  constructor(private actorDataService: ActorDataService) {}

  async deleteActor(
    presenter: ActorDeletePresenter,
    actorId: ActorId
  ): Promise<void> {
    if (confirm('Jesteś pewien?')) {
      await this.actorDataService.deleteActor(actorId).toPromise();
      presenter.displayActorDeletedNotification();
    }
  }
}

export interface ActorDeletePresenter {
  displayActorDeletedNotification(): void;
}
