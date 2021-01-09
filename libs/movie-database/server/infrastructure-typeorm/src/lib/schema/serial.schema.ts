import { EntitySchema } from 'typeorm';
import { SerialEntity } from '@tin/movie-database/server/domain';

export const SerialSchema = new EntitySchema<SerialEntity>({
  name: 'SerialEntity',
  target: SerialEntity,
  columns: {
    description: {
      type: String,
    },
    id: {
      primary: true,
      generated: true,
      type: 'int',
    },
    episodesCount: {
      type: Number,
    },
    thumbnailUrl: { type: String },
    title: { type: String },
  },
  relations: {
    actors: {
      type: 'one-to-many',
      target: 'SerialCastMemberEntity',
      joinColumn: { name: 'id', referencedColumnName: 'serial' },
      inverseSide: 'serialAssociation',
    },
  },
});
