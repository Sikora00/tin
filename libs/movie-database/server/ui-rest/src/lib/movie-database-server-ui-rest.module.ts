import { Module } from '@nestjs/common';
import { MovieController } from './movie/movie.controller';
import { ActorController } from './actor/actor.controller';
import { SerialController } from './serial/serial.controller';
import { MovieDatabaseServerApplicationModule } from '@tin/movie-database/server/application';

@Module({
  imports: [MovieDatabaseServerApplicationModule],
  controllers: [ActorController, MovieController, SerialController],
})
export class MovieDatabaseServerUiRestModule {}
