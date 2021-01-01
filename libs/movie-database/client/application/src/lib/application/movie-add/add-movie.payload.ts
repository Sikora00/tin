import {ActorId, MovieProps} from '@tin/movie-database/domain';

export interface AddMoviePayload extends MovieProps {
  actors: { actor: ActorId; role: string }[];
}
