import { Movie } from '@tin/movie-database/domain';
import { ActorId } from '@tin/movie-database/domain';

export interface EditMoviePayload extends Omit<Movie, 'actors'> {
  actors: { actor: ActorId; role: string }[];
}
