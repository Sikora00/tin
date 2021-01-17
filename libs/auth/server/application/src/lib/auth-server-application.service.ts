import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepo } from './ports/user.repository';
import { LoginWriteModel } from '../../../../domain/src/lib/write-models/login.write-model';
import { LoginReadModel } from '../../../../domain/src/lib/write-models/login.read-model';
import { User } from '@tin/auth/server/domain';
import { RegisterWriteModel } from '../../../../domain/src/lib/write-models/register.write-model';

@Injectable()
export class AuthServerApplicationService {
  constructor(
    private userRepository: UserRepo,
    private jwtService: JwtService
  ) {}

  async register(data: RegisterWriteModel): Promise<User> {
    if (await this.userRepository.findByLogin(data.login)) {
      throw new BadRequestException('User with this login already exists');
    }
    const user = await User.create(data);
    return this.userRepository.save(user);
  }

  async login(loginPayload: LoginWriteModel): Promise<LoginReadModel> {
    const user = await this.userRepository.findByLogin(loginPayload.login);
    if (user) {
      if (await user.checkPassword(loginPayload.password)) {
        const payload = { sub: user.id };

        return {
          accessToken: this.jwtService.sign(payload),
        };
      }
    }
    throw new UnauthorizedException();
  }
}
