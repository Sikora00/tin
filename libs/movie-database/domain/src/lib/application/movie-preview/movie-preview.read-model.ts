import { Actor } from '../../domain/entities/actor';
import { CastMember } from '../../domain/entities/cast-member';
import { Movie, MovieRelations } from '../../domain/entities/movie';

export interface MoviePreviewActor extends Omit<CastMember, 'movie' | 'actor'> {
  actor: Actor;
}

export interface MoviePreview extends Omit<Movie, keyof MovieRelations> {
  actors: MoviePreviewActor[];
}
