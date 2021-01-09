import { CreateMovieDto } from './create-movie.dto';
import { MovieEditWriteModel, MovieId } from '@tin/movie-database/domain';

export class UpdateMovieDto
  extends CreateMovieDto
  implements MovieEditWriteModel {}
