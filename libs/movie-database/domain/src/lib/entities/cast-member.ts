import {ActorId} from '../value-objects/actor-id.value-object';
import {MovieId} from '../value-objects/movie-id.value-object';
import {CastMemberId} from "../value-objects/cast-member-id.value-object";
import {SerialId} from "../..";

export interface BaseCastMember {
  id: CastMemberId;
  actor: ActorId;
  role: string;
}

export interface CastMember extends BaseCastMember{
  movie: MovieId;
}

export interface SerialCastMember extends BaseCastMember{
  serial: SerialId;
}
