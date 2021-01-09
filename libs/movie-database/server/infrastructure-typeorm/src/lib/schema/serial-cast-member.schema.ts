import { EntitySchema } from 'typeorm';
import {
  SerialCastMemberEntity,
  MovieEntity,
} from '@tin/movie-database/server/domain';

export const SerialCastMemberSchema = new EntitySchema<SerialCastMemberEntity>({
  extends: 'BaseCastMemberEntity',
  name: 'SerialCastMemberEntity',
  tableName: 'castMember',
  target: SerialCastMemberEntity,
  columns: {
    serial: {
      type: Number,
      nullable: true
    },
  },
  relations: {
    serialAssociation: {
      type: 'many-to-one',
      target: 'SerialEntity',
      onDelete: 'CASCADE',
      joinColumn: { name: 'serial', referencedColumnName: 'id' },
    },
  },
});
