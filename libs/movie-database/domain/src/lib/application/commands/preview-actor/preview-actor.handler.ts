import { CommandHandler, ICommandHandler } from '@valueadd/ng-cqrs';
import { PreviewActorCommand } from './preview-actor.command';
import { ActorStore } from '../../../+state/actor/actor.store';
import { Injectable } from '@angular/core';
import { ActorQuery } from '../../../+state/actor/actor.query';
import { ActorDataService } from '../../../infrastructure/actor.data.service';
import { first, mergeMap, switchMap, tap } from 'rxjs/operators';
import { CastMemberDataService } from '../../../infrastructure/cast-member.data.service';
import { MovieDataService } from '../../../infrastructure/movie.data.service';
import { select, Store } from '@ngrx/store';
import { forkJoin, Observable, of } from 'rxjs';
import { CastMemberStore } from '../../../+state/cast-member/cast-member.store';
import { CastMemberQuery } from '../../../+state/cast-member/cast-member.query';
import { Actor, CastMember, Movie } from '@tin/movie-database/domain';
import { CastMemberId } from '../../../domain/value-objects/cast-member-id.value-object';
import { MovieId } from '../../../domain/value-objects/movie-id.value-object';
import {
  getAllMovie,
  getMovieEntities,
} from '../../../+state/movie/movie.selectors';
import { loadMovieSuccess } from '../../../+state/movie/movie.actions';
import { ActorId } from '../../../domain/value-objects/actor-id.value-object';

@Injectable({ providedIn: 'root' })
export class PreviewActorHandler
  implements ICommandHandler<PreviewActorCommand> {
  constructor(
    private actorStore: ActorStore,
    private castMemberStore: CastMemberStore,
    private castMemberQuery: CastMemberQuery,
    private store: Store,
    private actorQuery: ActorQuery,
    private dataService: ActorDataService,
    private castMemberDataService: CastMemberDataService,
    private movieDataService: MovieDataService
  ) {}

  async handle(command: PreviewActorCommand): Promise<void> {
    this.actorStore.setLoading(true);
    return this.getActor(command.id)
      .pipe(
        switchMap((actor) => {
          return forkJoin(
            actor.movies.length
              ? actor.movies.map((castMemberId) => {
                  return this.getCastMember(castMemberId).pipe(
                    switchMap((castMember) => this.getMovie(castMember.movie))
                  );
                })
              : of([])
          );
        })
      )
      .toPromise()
      .then(() => {
        this.actorStore.setActive(command.id);
        this.actorStore.setLoading(false);
      });
  }

  private getActor(actorId: ActorId): Observable<Actor> {
    if (this.actorQuery.hasEntity(actorId)) {
      return of(this.actorQuery.getEntity(actorId));
    }

    return this.dataService
      .loadSingle(actorId)
      .pipe(tap((actor) => this.actorStore.add(actor)));
  }

  private getCastMember(castMemberId: CastMemberId): Observable<CastMember> {
    if (this.castMemberQuery.hasEntity(castMemberId)) {
      return of(this.castMemberQuery.getEntity(castMemberId));
    }
    return this.castMemberDataService
      .loadSingle(castMemberId)
      .pipe(tap((castMember) => this.castMemberStore.add(castMember)));
  }

  getMovie(movieId: MovieId): Observable<Movie> {
    return this.store.pipe(select(getMovieEntities)).pipe(
      first(),
      switchMap((entities) => {
        if (entities[movieId]) {
          return of(entities[movieId]);
        }

        return this.movieDataService
          .loadSinge(movieId)
          .pipe(
            tap((movie) =>
              this.store.dispatch(loadMovieSuccess({ movie: [movie] }))
            )
          );
      })
    );
  }
}
