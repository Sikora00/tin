import { Module } from '@nestjs/common';
import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';
import { MovieDatabaseServerInfrastructureTypeormModule } from '@tin/movie-database/server/infrastructure-typeorm';
import { ActorController } from './actor/actor.controller';
import { ActorService } from './actor/actor.service';

@Module({
  imports: [MovieDatabaseServerInfrastructureTypeormModule],
  controllers: [ActorController, MovieController],
  providers: [ActorService, MovieService],
})
export class MovieDatabaseServerUiRestModule {}
