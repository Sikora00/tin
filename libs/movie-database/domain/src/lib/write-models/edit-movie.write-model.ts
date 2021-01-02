import { ActorId, Movie } from '@tin/movie-database/domain';

export interface EditMovieWriteModel extends Omit<Movie, 'actors'> {
  actors: { actor: ActorId; role: string }[];
}
