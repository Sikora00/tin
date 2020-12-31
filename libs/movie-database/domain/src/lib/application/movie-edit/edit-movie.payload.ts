import { Movie } from '../../domain/entities/movie';
import { ActorId } from '../../domain/value-objects/actor-id.value-object';

export interface EditMoviePayload extends Omit<Movie, 'actors'> {
  actors: { actor: ActorId; role: string }[];
}
