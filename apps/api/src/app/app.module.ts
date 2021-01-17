import { Module } from '@nestjs/common';
import { MovieDatabaseServerUiRestModule } from '@tin/movie-database/server/ui-rest';
import { AppCoreModule } from './app-core.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthServerUiRestModule } from '@tin/auth/server/ui-rest';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'tin'),
    }),
    AppCoreModule,
    MovieDatabaseServerUiRestModule,
    AuthServerUiRestModule,
  ],
})
export class AppModule {}
