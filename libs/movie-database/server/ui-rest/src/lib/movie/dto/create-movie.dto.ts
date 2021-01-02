import { ActorId, AddMovieWriteModel } from '@tin/movie-database/domain';

export class CreateMovieDto implements AddMovieWriteModel {
  actors: { actor: ActorId; role: string }[];
  description: string;
  releaseDate: Date;
  thumbnailUrl: string;
  title: string;
}
