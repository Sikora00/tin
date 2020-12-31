import { Injectable } from '@angular/core';
import { ActorDataService } from '../infrastructure/actor/actor.data.service';
import { ActorId } from '@tin/movie-database/domain';

@Injectable()
export class ActorDeleteFacade {
  constructor(private actorDataService: ActorDataService) {}

  async deleteActor(actorId: ActorId): Promise<void> {
    await this.actorDataService.deleteActor(actorId).toPromise();
  }
}
