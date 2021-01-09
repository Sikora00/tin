import { NestFactory } from '@nestjs/core';
import { CommandModule, CommandService } from 'nestjs-command';
import { CliModule } from './cli/cli.module';

(async () => {
  const app = await NestFactory.createApplicationContext(CliModule, {
    //logger: false // no logger
  });
  app.select(CommandModule).get(CommandService).exec();
})();
