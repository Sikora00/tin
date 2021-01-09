import {
  Actor,
  ActorId,
  ActorAddWriteModel,
  CastMemberId,
  ActorEditWriteModel,
} from '@tin/movie-database/domain';

export class ActorEntity implements Actor {
  biography: string;
  thumbnailUrl: string;
  movies: CastMemberId[];
  serials: CastMemberId[];
  name: string;
  surname: string;
  id: ActorId;

  static create(payload: ActorAddWriteModel): Actor {
    const actor = new ActorEntity();
    actor.biography = payload.biography;
    actor.name = payload.name;
    actor.surname = payload.surname;
    actor.thumbnailUrl = payload.thumbnailUrl;
    return actor;
  }

  update(payload: ActorEditWriteModel): void {
    this.biography = payload.biography;
    this.name = payload.name;
    this.surname = payload.surname;
    this.thumbnailUrl = payload.thumbnailUrl;
  }
}
