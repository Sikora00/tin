import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { Seeder } from './seeder';
import { MovieDatabaseServerApplicationModule } from '@tin/movie-database/server/application';
import { AppCoreModule } from '../app/app-core.module';

@Module({
  imports: [CommandModule, AppCoreModule, MovieDatabaseServerApplicationModule],
  providers: [Seeder],
})
export class CliModule {}
