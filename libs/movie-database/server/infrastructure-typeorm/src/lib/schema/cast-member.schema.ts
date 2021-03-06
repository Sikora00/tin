import { EntitySchema } from 'typeorm';
import {
  CastMemberEntity,
  MovieEntity,
} from '@tin/movie-database/server/domain';

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
    actorAssociation: {
      type: 'many-to-one',
      target: 'ActorEntity',
      onDelete: 'CASCADE',
      joinColumn: { name: 'actor', referencedColumnName: 'id' },
    },
    movieAssociation: {
      type: 'many-to-one',
      target: 'MovieEntity',
      onDelete: 'CASCADE',
      joinColumn: { name: 'movie', referencedColumnName: 'id' },
    },
  },
});
