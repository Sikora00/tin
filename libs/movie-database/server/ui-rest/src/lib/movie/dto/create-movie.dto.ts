import {MovieAddWriteModel} from '@tin/movie-database/domain';
import { Type } from 'class-transformer';
import {IsArray, IsNotEmpty, IsString, ValidateNested} from 'class-validator';
import {CastMemberDto} from "../../shared/dto/cast-member.dto";


export class CreateMovieDto implements MovieAddWriteModel {
  @IsArray()
  @ValidateNested({each: true, always: true})
  @Type(() => CastMemberDto)
  actors: CastMemberDto[];

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  releaseDate: Date;

  @IsNotEmpty()
  @IsString()
  thumbnailUrl: string;

  @IsNotEmpty()
  @IsString()
  title: string;
}
