import { RegisterWriteModel } from '../../../../../domain/src/lib/write-models/register.write-model';
import { IsDefined, IsNotEmpty, IsString, Length } from 'class-validator';

export class RegisterDto implements RegisterWriteModel {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  login: string;
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Length(8)
  password: string;
}
