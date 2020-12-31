import { Injectable } from '@angular/core';
import { ActorQuery } from '../../+state/actor/actor.query';
import { CastMemberQuery } from '../../+state/cast-member/cast-member.query';
import { MovieQuery } from '../../+state/movie/movie.query';
import { combineQueries } from '@datorama/akita';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MoviePreview } from './movie-preview.read-model';
import { Movie } from '../../domain/entities/movie';
import { CastMember } from '../../domain/entities/cast-member';
import { CastMemberId } from '../../domain/value-objects/cast-member-id.value-object';
import { ActorId } from '../../domain/value-objects/actor-id.value-object';
import { Actor } from '../../domain/entities/actor';

@Injectable({ providedIn: 'root' })
export class MoviePreviewQuery {
  moviePreview$: Observable<MoviePreview> = combineQueries([
    (this.movieQuery.selectedMovie$ as Observable<Movie>).pipe(filter(Boolean)),
    this.castMemberQuery.selectAll({ asObject: true }),
    this.actorQuery.selectAll({ asObject: true }),
  ]).pipe(
    map(
      ([movie, castMembers, actors]: [
        Movie,
        Record<CastMemberId, CastMember>,
        Record<ActorId, Actor>
      ]) => {
        return {
          ...movie,
          actors: movie.actors.map((castMemberId) => ({
            id: castMemberId,
            role: castMembers[castMemberId].role,
            actor: actors[castMembers[castMemberId].actor],
          })),
        };
      }
    )
  );
  constructor(
    private actorQuery: ActorQuery,
    private castMemberQuery: CastMemberQuery,
    private movieQuery: MovieQuery
  ) {}
}
