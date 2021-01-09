import { Actor, BaseCastMember } from '@tin/movie-database/domain';

export interface CastMemberWithActorReadModel
  extends Omit<BaseCastMember, 'actor'> {
  actor: Actor;
}
