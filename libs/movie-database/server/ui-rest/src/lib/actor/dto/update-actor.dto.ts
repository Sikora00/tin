import { CreateActorDto } from './create-actor.dto';
import { ActorEditWriteModel } from '@tin/movie-database/domain';

export class UpdateActorDto
  extends CreateActorDto
  implements ActorEditWriteModel {}
