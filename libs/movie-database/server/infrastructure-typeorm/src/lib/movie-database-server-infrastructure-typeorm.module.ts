import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CastMemberSchema } from './schema/cast-member.schema';
import { MovieSchema } from './schema/movie.schema';
import { ActorSchema } from './schema/actor.schema';
import { SerialCastMemberSchema } from './schema/serial-cast-member.schema';
import { SerialSchema } from './schema/serial.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ActorSchema,
      CastMemberSchema,
      MovieSchema,
      SerialSchema,
      SerialCastMemberSchema,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class MovieDatabaseServerInfrastructureTypeormModule {}
