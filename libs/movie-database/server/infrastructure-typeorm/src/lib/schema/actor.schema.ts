import { EntitySchema } from 'typeorm';
import { ActorEntity } from '@tin/movie-database/server/domain';

export const ActorSchema = new EntitySchema<ActorEntity>({
  name: 'ActorEntity',
  target: ActorEntity,
  columns: {
    biography: {
      type: String,
    },
    id: {
      primary: true,
      generated: true,
      type: 'int',
    },
    name: {
      type: String,
    },
    surname: { type: String },
    thumbnailUrl: { type: String },
  },
  relations: {
    movies: {
      type: 'one-to-many',
      target: 'CastMemberEntity',
      joinColumn: { name: 'id', referencedColumnName: 'actor' },
      inverseSide: 'actorAssociation',
    },
    serials: {
      type: 'one-to-many',
      target: 'SerialCastMemberEntity',
      joinColumn: { name: 'id', referencedColumnName: 'actor' },
      inverseSide: 'actorAssociation',
    },
  },
});
