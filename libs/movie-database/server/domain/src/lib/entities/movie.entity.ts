import {
  AddMovieWriteModel,
  CastMemberId,
  EditMovieWriteModel,
  Movie,
  MovieId,
} from '@tin/movie-database/domain';

export class MovieEntity implements Movie {
  actors: CastMemberId[];
  description: string;
  id: MovieId;
  releaseDate: Date;
  thumbnailUrl: string;
  title: string;

  static create(payload: AddMovieWriteModel): Movie {
    const movie = new MovieEntity();
    movie.title = payload.title;
    movie.description = payload.description;
    movie.releaseDate = payload.releaseDate;
    movie.thumbnailUrl = payload.thumbnailUrl;
    return movie;
  }

  update(payload: EditMovieWriteModel): void {
    this.title = payload.title;
    this.description = payload.description;
    this.releaseDate = payload.releaseDate;
    this.thumbnailUrl = payload.thumbnailUrl;
  }
}
