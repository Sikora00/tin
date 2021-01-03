import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CastMemberSchema } from './schema/cast-member.schema';
import { MovieSchema } from './schema/movie.schema';
import { ActorSchema } from './schema/actor.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActorSchema, CastMemberSchema, MovieSchema]),
  ],
  exports: [TypeOrmModule],
})
export class MovieDatabaseServerInfrastructureTypeormModule {}
