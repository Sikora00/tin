import { Injectable } from '@angular/core';
import { ActorQuery } from '../../+state/actor/actor.query';
import { CastMemberQuery } from '../../+state/cast-member/cast-member.query';
import { MovieQuery } from '../../+state/movie/movie.query';
import { combineQueries } from '@datorama/akita';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import {
  Actor,
  CastMember,
  CastMemberId,
  Movie,
  MovieId,
  Serial,
  SerialCastMember,
  SerialId,
} from '@tin/movie-database/domain';
import { ActorPreview } from './actor-preview.facade';
import { SerialQuery } from '../../+state/serial/serial.query';
import { SerialCastMemberQuery } from '../../+state/serial-cast-member/serial-cast-member.query';

@Injectable({ providedIn: 'root' })
export class ActorPreviewQuery {
  actorPreview$: Observable<ActorPreview> = combineQueries([
    (this.actorQuery.selectedActor$ as Observable<Actor>).pipe(filter(Boolean)),
    this.castMemberQuery.selectAll({ asObject: true }),
    this.serialCastMemberQuery.selectAll({ asObject: true }),
    this.movieQuery.selectAll({ asObject: true }),
    this.serialQuery.selectAll({ asObject: true }),
  ]).pipe(
    map(
      ([actor, castMembers, serialCastMembers, movies, serials]: [
        Actor,
        Record<CastMemberId, CastMember>,
        Record<CastMemberId, SerialCastMember>,
        Record<MovieId, Movie>,
        Record<SerialId, Serial>
      ]) => {
        return {
          ...actor,
          movies: actor.movies.map((castMemberId) => ({
            id: castMemberId,
            role: castMembers[castMemberId].role,
            movie: movies[castMembers[castMemberId].movie],
          })),
          serials: actor.serials.map((castMemberId) => ({
            id: castMemberId,
            role: serialCastMembers[castMemberId].role,
            serial: serials[serialCastMembers[castMemberId].serial],
          })),
        };
      }
    )
  );

  constructor(
    private actorQuery: ActorQuery,
    private castMemberQuery: CastMemberQuery,
    private movieQuery: MovieQuery,
    private serialQuery: SerialQuery,
    private serialCastMemberQuery: SerialCastMemberQuery
  ) {}
}
