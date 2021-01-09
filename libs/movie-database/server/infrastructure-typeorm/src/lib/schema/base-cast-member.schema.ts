import {EntitySchema} from 'typeorm';
import {
  BaseCastMemberEntity,
  MovieEntity,
} from '@tin/movie-database/server/domain';

export const BaseCastMemberSchema = new EntitySchema<BaseCastMemberEntity>({
  name: 'BaseCastMemberEntity',
  target: BaseCastMemberEntity,
  tableName: 'castMember',
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
  },
  relations: {
    actorAssociation: {
      type: 'many-to-one',
      target: 'ActorEntity',
      onDelete: 'CASCADE',
      joinColumn: {name: 'actor', referencedColumnName: 'id'},
    },
  },
  checks: [{
    name: 'require movie or serial',
    expression: '("movie" is not null and "serial" is null) or ("movie" is null and "serial" is not null)'
  }]
});
