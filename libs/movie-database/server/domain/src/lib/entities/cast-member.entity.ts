import {
  ActorId,
  CastMember,
  CastMemberId,
  MovieId,
} from '@tin/movie-database/domain';

export class CastMemberEntity implements CastMember {
  id: CastMemberId;
  actor: ActorId;
  actorAssociation: ActorId;
  movie: MovieId;
  movieAssociation: MovieId;
  role: string;

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
