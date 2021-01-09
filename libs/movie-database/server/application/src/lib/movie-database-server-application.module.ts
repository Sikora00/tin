import { Module } from '@nestjs/common';
import { ActorService } from './actor.service';
import { MovieService } from './movie.service';
import { SerialService } from './serial.service';
import { MovieDatabaseServerInfrastructureTypeormModule } from '@tin/movie-database/server/infrastructure-typeorm';

@Module({
  imports: [MovieDatabaseServerInfrastructureTypeormModule],
  providers: [ActorService, MovieService, SerialService],
  exports: [ActorService, MovieService, SerialService],
})
export class MovieDatabaseServerApplicationModule {}
