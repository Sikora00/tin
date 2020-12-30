import { CastMemberId } from '../value-objects/cast-member-id.value-object';

export interface Actor {
  id: number;
  name: string;
  surname: string;
  biography: string;
  thumbnailUrl: string;
  movies: CastMemberId[];
}
