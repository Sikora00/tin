import {
  CastMemberWithActorReadModel,
  Serial,
  SerialRelations,
} from '@tin/movie-database/domain';

export interface SerialPreviewReadModel
  extends Omit<Serial, keyof SerialRelations> {
  actors: CastMemberWithActorReadModel[];
}
