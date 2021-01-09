import { ActorId } from '../value-objects/actor-id.value-object';
import { CastMemberId } from '../value-objects/cast-member-id.value-object';

export interface ActorProps {
  name: string;
  surname: string;
  biography: string;
  thumbnailUrl: string;
}

export interface ActorRelations {
  serials: CastMemberId[];
  movies: CastMemberId[];
}
export interface Actor extends ActorProps, ActorRelations {
  id: ActorId;
}
