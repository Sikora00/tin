import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthServerApplicationService } from './auth-server-application.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt/jwt.strategy';
import { AuthServerInfrastructureTypeormModule } from '@tin/auth/server/infrastructure-typeorm';

@Module({
  imports: [
    PassportModule,
    AuthServerInfrastructureTypeormModule,
    JwtModule.register({
      secret: 'mysecretpassword',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthServerApplicationService, JwtStrategy],
  exports: [AuthServerApplicationService],
})
export class AuthServerApplicationModule {}
