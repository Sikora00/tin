import { CastMember, Movie } from '@tin/movie-database/domain';

export interface MovieWithActorsReadModel extends Omit<Movie, 'actors'> {
  actors: CastMember[];
}
