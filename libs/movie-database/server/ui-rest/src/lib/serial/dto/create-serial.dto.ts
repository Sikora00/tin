import {SerialAddWriteModel} from "@tin/movie-database/domain";
import {IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {CastMemberDto} from "../../shared/dto/cast-member.dto";

export class CreateSerialDto implements SerialAddWriteModel {
  @IsArray()
  @ValidateNested({each: true, always: true})
  @Type(() => CastMemberDto)
  actors: CastMemberDto[];

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  episodesCount: number

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
