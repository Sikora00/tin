import { Module } from '@nestjs/common';
import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';
import { MovieDatabaseServerInfrastructureTypeormModule } from '@tin/movie-database/server/infrastructure-typeorm';

@Module({
  imports: [MovieDatabaseServerInfrastructureTypeormModule],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieDatabaseServerUiRestModule {}
