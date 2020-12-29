import { Actor } from './actor';
import { Movie } from './movie';

export interface CastMember {
  id: number;
  actor: Actor;
  movie: Movie;
  role: string;
}
