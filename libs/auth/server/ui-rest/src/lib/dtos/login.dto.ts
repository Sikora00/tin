import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { LoginWriteModel } from '../../../../../domain/src/lib/write-models/login.write-model';

export class LoginDto implements LoginWriteModel {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  login: string;
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  password: string;
}
