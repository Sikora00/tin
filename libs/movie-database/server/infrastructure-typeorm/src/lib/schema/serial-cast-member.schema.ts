import { EntitySchema } from 'typeorm';
import {
  SerialCastMemberEntity,
  MovieEntity,
} from '@tin/movie-database/server/domain';

export const SerialCastMemberSchema = new EntitySchema<SerialCastMemberEntity>({
  name: 'SerialCastMemberEntity',
  target: SerialCastMemberEntity,
  columns: {
    role: {
      type: String,
    },
    id: {
      primary: true,
      generated: true,
      type: 'int',
    },
    actor: {
      type: Number,
    },
    serial: {
      type: Number,
    },
  },
  relations: {
    actorAssociation: {
      type: 'many-to-one',
      target: 'ActorEntity',
      onDelete: 'CASCADE',
      joinColumn: { name: 'actor', referencedColumnName: 'id' },
    },
    serialAssociation: {
      type: 'many-to-one',
      target: 'SerialEntity',
      onDelete: 'CASCADE',
      joinColumn: { name: 'serial', referencedColumnName: 'id' },
    },
  },
});
