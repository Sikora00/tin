import { CreateActorDto } from './create-actor.dto';
import { EditActorWriteModel } from '@tin/movie-database/domain';

export class UpdateActorDto
  extends CreateActorDto
  implements EditActorWriteModel {}
