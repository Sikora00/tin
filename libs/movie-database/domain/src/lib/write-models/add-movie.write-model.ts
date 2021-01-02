import { ActorId, MovieProps } from '@tin/movie-database/domain';

export interface AddMovieWriteModel extends MovieProps {
  actors: { actor: ActorId; role: string }[];
}
