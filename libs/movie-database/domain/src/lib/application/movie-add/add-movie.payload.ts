import { MovieProps } from '../../domain/entities/movie';
import { ActorId } from '../../domain/value-objects/actor-id.value-object';

export interface AddMoviePayload extends MovieProps {
  actors: { actor: ActorId; role: string }[];
}
