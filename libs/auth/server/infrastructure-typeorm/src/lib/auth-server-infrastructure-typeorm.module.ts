import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './schema/user.schema';
import { UserRepo } from '../../../application/src/lib/ports/user.repository';
import { TypeormUserRepo } from './repositories/typeorm-user.repo';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  providers: [{ provide: UserRepo, useClass: TypeormUserRepo }],
  exports: [TypeOrmModule, UserRepo],
})
export class AuthServerInfrastructureTypeormModule {}
