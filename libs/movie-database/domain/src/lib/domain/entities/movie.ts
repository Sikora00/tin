import { MovieId } from '../value-objects/movie-id.value-object';
import { CastMemberId } from '../value-objects/cast-member-id.value-object';

export interface Movie {
  id: MovieId;
  actors: CastMemberId[];
  description: string;
  releaseDate: Date;
  thumbnailUrl: string;
  title: string;
}
