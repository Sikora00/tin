import { ActorStore } from '../../../+state/actor/actor.store';
import { Injectable } from '@angular/core';
import { first, switchMap, tap } from 'rxjs/operators';
import { CastMemberDataService } from '../../../infrastructure/cast-member.data.service';
import { MovieDataService } from '../../../infrastructure/movie.data.service';
import { select, Store } from '@ngrx/store';
import { forkJoin, Observable, of } from 'rxjs';
import { CastMemberStore } from '../../../+state/cast-member/cast-member.store';
import { CastMemberQuery } from '../../../+state/cast-member/cast-member.query';
import { CastMemberId } from '../../../domain/value-objects/cast-member-id.value-object';
import { MovieId } from '../../../domain/value-objects/movie-id.value-object';
import { getMovieEntities } from '../../../+state/movie/movie.selectors';
import { loadMovieSuccess } from '../../../+state/movie/movie.actions';
import { ActorService } from '../../services/actor.service';
import { CastMember } from '../../../domain/entities/cast-member';
import { Movie } from '../../../domain/entities/movie';
import { ActorId } from '../../../domain/value-objects/actor-id.value-object';

@Injectable({ providedIn: 'root' })
export class LoadActorPreviewDataService {
  constructor(
    private actorService: ActorService,
    private actorStore: ActorStore,
    private castMemberStore: CastMemberStore,
    private castMemberQuery: CastMemberQuery,
    private store: Store,
    private castMemberDataService: CastMemberDataService,
    private movieDataService: MovieDataService
  ) {}

  async execute(actorId: ActorId): Promise<void> {
    this.actorStore.setLoading(true);
    return this.actorService
      .getAndSelectActor(actorId)
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
        this.actorStore.setActive(actorId);
        this.actorStore.setLoading(false);
      });
  }

  private getCastMember(castMemberId: CastMemberId): Observable<CastMember> {
    if (this.castMemberQuery.hasEntity(castMemberId)) {
      return of(this.castMemberQuery.getEntity(castMemberId));
    }
    return this.castMemberDataService
      .loadSingle(castMemberId)
      .pipe(tap((castMember) => this.castMemberStore.add(castMember)));
  }

  private getMovie(movieId: MovieId): Observable<Movie> {
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
