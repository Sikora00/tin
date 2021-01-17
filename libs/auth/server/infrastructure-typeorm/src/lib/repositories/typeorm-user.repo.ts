import { Injectable } from '@nestjs/common';
import { UserRepo } from '../../../../application/src/lib/ports/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSchema } from '../schema/user.schema';
import { Repository } from 'typeorm';
import { User } from '@tin/auth/server/domain';

@Injectable()
export class TypeormUserRepo implements UserRepo {
  constructor(
    @InjectRepository(UserSchema) private typeormRepo: Repository<User>
  ) {}

  findByLogin(login: string): Promise<User | undefined> {
    return this.typeormRepo.findOne({ login });
  }

  save(user: User): Promise<User> {
    return this.typeormRepo.save(user);
  }
}
