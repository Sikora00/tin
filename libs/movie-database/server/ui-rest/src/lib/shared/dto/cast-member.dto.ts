import {ActorId, CastMemberWriteModel} from '@tin/movie-database/domain';
import {IsDefined, IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class CastMemberDto implements CastMemberWriteModel{
  @IsNotEmpty()
  @IsNumber()
  @IsDefined()
  actor: ActorId;

  @IsNotEmpty()
  @IsString()
  role: string
}
