import { ActorId } from '../value-objects/actor-id.value-object';
import { MovieId } from '../value-objects/movie-id.value-object';

export interface CastMember {
  id: number;
  actor: ActorId;
  movie: MovieId;
  role: string;
}
