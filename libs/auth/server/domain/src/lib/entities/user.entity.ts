import { User as IUser } from '@tin/auth/domain';
import { PasswordHash } from '../value-objects/password-hash';
import * as bcrypt from 'bcrypt';
import { RegisterWriteModel } from '../../../../../domain/src/lib/write-models/register.write-model';

export class User implements IUser {
  id: number;
  login: string;
  passwordHash: PasswordHash;
  salt: string;

  checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.passwordHash);
  }

  private async generatePasswordAndSalt(plainPassword: string): Promise<void> {
    const saltRounds = 10;

    this.salt = await bcrypt.genSalt(saltRounds);
    this.passwordHash = await bcrypt.hash(plainPassword, this.salt);
  }

  static async create(data: RegisterWriteModel): Promise<User> {
    const user = new User();
    user.login = data.login;
    await user.generatePasswordAndSalt(data.password);
    return user;
  }
}
