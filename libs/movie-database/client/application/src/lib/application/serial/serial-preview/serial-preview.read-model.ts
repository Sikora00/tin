import {CastMemberWithActorReadModel, Movie, MovieRelations, SerialRelations} from '@tin/movie-database/domain';

export interface SerialPreviewReadModel extends Omit<Movie, keyof SerialRelations> {
  actors: CastMemberWithActorReadModel[];
}
