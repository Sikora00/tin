import {
  ActorId,
  CastMemberId,
  MovieId,
  SerialCastMember,
  SerialId,
} from '@tin/movie-database/domain';

export class SerialCastMemberEntity implements SerialCastMember {
  id: CastMemberId;
  actor: ActorId;
  actorAssociation: ActorId;
  serial: MovieId;
  serialAssociation: MovieId;
  role: string;

  static create(
    actor: ActorId,
    serial: SerialId,
    role: string
  ): SerialCastMember {
    const castMember = new SerialCastMemberEntity();
    castMember.actor = actor;
    castMember.serial = serial;
    castMember.role = role;
    return castMember;
  }
}
