import { EntitySchema } from 'typeorm';
import {
  CastMemberEntity,
  MovieEntity,
} from '@tin/movie-database/server/domain';

export const CastMemberSchema = new EntitySchema<CastMemberEntity>({
  extends: 'BaseCastMemberEntity',
  name: 'CastMemberEntity',
  tableName: 'castMember',
  target: CastMemberEntity,
  columns: {
    movie: {
      type: Number,
      nullable: true
    },
  },
  relations: {
    movieAssociation: {
      type: 'many-to-one',
      target: 'MovieEntity',
      onDelete: 'CASCADE',
      joinColumn: { name: 'movie', referencedColumnName: 'id' },
    },
  },
});
