import { CreateMovieDto } from './create-movie.dto';
import { EditMovieWriteModel, MovieId } from '@tin/movie-database/domain';

export class UpdateMovieDto
  extends CreateMovieDto
  implements EditMovieWriteModel {
  id: MovieId;
}
