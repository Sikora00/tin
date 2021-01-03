import { AddActorWriteModel } from '@tin/movie-database/domain';

export class CreateActorDto implements AddActorWriteModel {
  biography: string;
  name: string;
  surname: string;
  thumbnailUrl: string;
}
