import { Actor, CastMember } from '@tin/movie-database/domain';

export interface ActorWithMoviesReadModel extends Omit<Actor, 'movies'> {
  movies: CastMember[];
}
