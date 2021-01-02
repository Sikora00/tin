import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CastMemberSchema } from './schema/cast-member.schema';
import { MovieSchema } from './schema/movie.schema';

@Module({
  imports: [TypeOrmModule.forFeature([CastMemberSchema, MovieSchema])],
  exports: [TypeOrmModule],
})
export class MovieDatabaseServerInfrastructureTypeormModule {}
