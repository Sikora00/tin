import { ActorId, MovieProps } from '@tin/movie-database/domain';

export interface EditMovieWriteModel extends MovieProps {
  actors: { actor: ActorId; role: string }[];
}
