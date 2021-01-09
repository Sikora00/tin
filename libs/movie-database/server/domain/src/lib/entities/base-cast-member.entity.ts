import {ActorId, BaseCastMember, CastMemberId,} from '@tin/movie-database/domain';

export abstract class BaseCastMemberEntity implements BaseCastMember {
  id: CastMemberId;
  actor: ActorId;
  actorAssociation: ActorId;
  role: string;
}
