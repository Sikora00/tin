import { Module } from '@nestjs/common';
import { MovieDatabaseServerUiRestModule } from '@tin/movie-database/server/ui-rest';
import { AppCoreModule } from './app-core.module';

@Module({
  imports: [AppCoreModule, MovieDatabaseServerUiRestModule],
})
export class AppModule {}
