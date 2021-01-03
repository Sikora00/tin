import { AddActorWriteModel } from '@tin/movie-database/domain';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateActorDto implements AddActorWriteModel {
  @IsNotEmpty()
  @IsString()
  biography: string;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  surname: string;
  @IsNotEmpty()
  @IsString()
  thumbnailUrl: string;
}
