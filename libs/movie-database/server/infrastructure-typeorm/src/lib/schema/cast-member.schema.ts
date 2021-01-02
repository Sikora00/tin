import { EntitySchema } from 'typeorm';
import { MovieEntity } from '@tin/movie-database/server/domain';
import { CastMemberEntity } from '@tin/movie-database/server/domain';

export const CastMemberSchema = new EntitySchema<CastMemberEntity>({
  name: 'CastMemberEntity',
  target: CastMemberEntity,
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
    movie: {
      type: Number,
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
