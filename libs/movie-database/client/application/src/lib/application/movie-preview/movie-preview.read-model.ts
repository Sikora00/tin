import {CastMemberWithActorReadModel, Movie, MovieRelations} from '@tin/movie-database/domain';

export interface MoviePreview extends Omit<Movie, keyof MovieRelations> {
  actors: CastMemberWithActorReadModel[];
}
