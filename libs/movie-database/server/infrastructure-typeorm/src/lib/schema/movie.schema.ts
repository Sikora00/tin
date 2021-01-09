import { EntitySchema } from 'typeorm';
import { MovieEntity } from '@tin/movie-database/server/domain';

export const MovieSchema = new EntitySchema<MovieEntity>({
  name: 'MovieEntity',
  target: MovieEntity,
  columns: {
    description: {
      type: String,
    },
    id: {
      primary: true,
      generated: true,
      type: 'int',
    },
    releaseDate: {
      type: Date,
    },
    thumbnailUrl: { type: String },
    title: { type: String },
  },
  relations: {
    actors: {
      type: 'one-to-many',
      target: 'CastMemberEntity',
      joinColumn: { name: 'id', referencedColumnName: 'movie' },
      inverseSide: 'movieAssociation',
    },
  },
});
