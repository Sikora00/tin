import {Actor, CastMember, Movie, MovieRelations} from '@tin/movie-database/domain';

export interface MoviePreviewActor extends Omit<CastMember, 'movie' | 'actor'> {
  actor: Actor;
}

export interface MoviePreview extends Omit<Movie, keyof MovieRelations> {
  actors: MoviePreviewActor[];
}
