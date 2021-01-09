import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseCastMemberSchema } from './schema/base-cast-member.schema';
import { MovieSchema } from './schema/movie.schema';
import { ActorSchema } from './schema/actor.schema';
import {SerialCastMemberSchema} from "./schema/serial-cast-member.schema";
import {SerialSchema} from "./schema/serial.schema";
import {CastMemberSchema} from "./schema/cast-member.schema";

@Module({
  imports: [
    TypeOrmModule.forFeature([ActorSchema, BaseCastMemberSchema, CastMemberSchema, MovieSchema, SerialSchema, SerialCastMemberSchema]),
  ],
  exports: [TypeOrmModule],
})
export class MovieDatabaseServerInfrastructureTypeormModule {}
