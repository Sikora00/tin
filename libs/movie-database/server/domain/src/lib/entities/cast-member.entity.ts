import {
  ActorId,
  CastMember,
  CastMemberId,
  MovieId,
} from '@tin/movie-database/domain';
import {BaseCastMemberEntity} from "./base-cast-member.entity";

export class CastMemberEntity extends BaseCastMemberEntity implements CastMember {
  movie: MovieId;
  movieAssociation: MovieId;

  static create(
    actor: ActorId,
    movie: MovieId,
    role: string
  ): CastMemberEntity {
    const castMember = new CastMemberEntity();
    castMember.actor = actor;
    castMember.movie = movie;
    castMember.role = role;
    return castMember;
  }
}
