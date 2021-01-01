import {Injectable} from '@angular/core';
import {ActorQuery} from '../../+state/actor/actor.query';
import {CastMemberQuery} from '../../+state/cast-member/cast-member.query';
import {MovieQuery} from '../../+state/movie/movie.query';
import {combineQueries} from '@datorama/akita';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {Actor, CastMember, CastMemberId, Movie, MovieId} from '@tin/movie-database/domain';
import {ActorPreview} from './actor-preview.facade';

@Injectable({ providedIn: 'root' })
export class ActorPreviewQuery {
  actorPreview$: Observable<ActorPreview> = combineQueries([
    (this.actorQuery.selectedActor$ as Observable<Actor>).pipe(filter(Boolean)),
    this.castMemberQuery.selectAll({ asObject: true }),
    this.movieQuery.selectAll({ asObject: true }),
  ]).pipe(
    map(
      ([actor, castMembers, movies]: [
        Actor,
        Record<CastMemberId, CastMember>,
        Record<MovieId, Movie>
      ]) => {
        return {
          ...actor,
          movies: actor.movies.map((castMemberId) => ({
            id: castMemberId,
            role: castMembers[castMemberId].role,
            movie: movies[castMembers[castMemberId].movie],
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
