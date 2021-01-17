import { Module } from '@nestjs/common';

import { AuthServerUiRestController } from './auth-server-ui-rest.controller';
import { AuthServerApplicationModule } from '../../../application/src';

@Module({
  imports: [AuthServerApplicationModule],
  controllers: [AuthServerUiRestController],
})
export class AuthServerUiRestModule {}
