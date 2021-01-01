import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { CastMemberDataService } from '../../../infrastructure/cast-member.data.service';
import { forkJoin, of } from 'rxjs';
import { MovieId } from '@tin/movie-database/domain';
import { MovieService } from '../../services/movie.service';
import { ActorDataService } from '../../../infrastructure/actor/actor.data.service';
import { MovieStore } from '../../../+state/movie/movie.store';

@Injectable({ providedIn: 'root' })
export class LoadMoviePreviewDataService {
  constructor(
    private actorDataService: ActorDataService,
    private castMemberDataService: CastMemberDataService,
    private movieService: MovieService,
    private movieStore: MovieStore
  ) {}

  async execute(movieId: MovieId): Promise<void> {
    return this.movieService
      .getAndSelect(movieId)
      .pipe(
        switchMap((movie) => {
          return forkJoin(
            movie.actors.length
              ? movie.actors.map((castMemberId) => {
                  return this.castMemberDataService
                    .loadSingle(castMemberId)
                    .pipe(
                      switchMap((castMember) =>
                        this.actorDataService.getSingleOnce(castMember.actor)
                      )
                    );
                })
              : of([])
          );
        })
      )
      .toPromise()
      .then(() => {
        this.movieStore.setActive(movieId);
      });
  }
}
