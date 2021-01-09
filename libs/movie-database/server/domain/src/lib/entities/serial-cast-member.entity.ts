import {
  ActorId,
  MovieId, SerialCastMember, SerialId,
} from '@tin/movie-database/domain';
import {BaseCastMemberEntity} from "./base-cast-member.entity";

export class SerialCastMemberEntity extends BaseCastMemberEntity implements SerialCastMember {
  serial: MovieId;
  serialAssociation: MovieId;

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
