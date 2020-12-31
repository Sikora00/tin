import { MovieId } from '../value-objects/movie-id.value-object';
import { CastMemberId } from '../value-objects/cast-member-id.value-object';

export interface MovieProps {
  description: string;
  releaseDate: Date;
  thumbnailUrl: string;
  title: string;
}

export interface MovieRelations {
  actors: CastMemberId[];
}

export interface Movie extends MovieProps, MovieRelations {
  id: MovieId;
}
