import { User } from '@tin/auth/server/domain';

export abstract class UserRepo {
  abstract save(user: User): Promise<User>;

  abstract findByLogin(username: string): Promise<User | undefined>;
}
