import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ActorHttpService } from './actor-http.service';
import { ActorStateManagerService } from './actor-state-manager.service';
import {
  Actor,
  ActorId,
  ActorProps,
  ActorWithMoviesReadModel,
  AddActorWriteModel,
  AddMovieWriteModel,
  EditActorWriteModel,
  Movie,
  MovieWithActorsReadModel,
} from '@tin/movie-database/domain';
import { CastMemberStore } from '../../+state/cast-member/cast-member.store';

@Injectable({ providedIn: 'root' })
export class ActorDataService {
  constructor(
    private actorHttpService: ActorHttpService,
    private actorStateManagerService: ActorStateManagerService,
    private castMemberStateManagerService: CastMemberStore
  ) {
    this.rememberResponse = this.rememberResponse.bind(this);
  }

  load(): Observable<Actor[]> {
    return this.actorHttpService
      .get<ActorWithMoviesReadModel[]>({ skipWrite: true })
      .pipe(this.rememberResponse);
  }

  getSingleOnce(id: ActorId): Observable<Actor> {
    return this.actorStateManagerService.getEntityOnce(id).pipe(
      switchMap((maybeActor) => {
        if (!maybeActor) {
          return this.actorHttpService
            .get<ActorWithMoviesReadModel>(id, { skipWrite: true })
            .pipe(
              this.rememberResponse,
              map((movies) => movies[0])
            );
        }
        return of(maybeActor);
      })
    );
  }

  deleteActor(actorId: ActorId): Observable<unknown> {
    return this.actorHttpService
      .delete(actorId)
      .pipe(tap(() => this.actorStateManagerService.deleteActor(actorId)));
  }

  private rememberResponse(
    response$: Observable<ActorWithMoviesReadModel | ActorWithMoviesReadModel[]>
  ): Observable<Actor[]> {
    return response$.pipe(
      map((res) => this.actorHttpService.normalize(res)),
      tap((entities) => {
        this.actorStateManagerService.remember(Object.values(entities.actor));
        this.castMemberStateManagerService.add(Object.values(entities.movies));
      }),
      map((entities) => Object.values(entities.actor))
    );
  }

  addActor(payload: AddActorWriteModel): Observable<Actor> {
    return this.actorHttpService.add<Actor>(payload as any).pipe(
      tap((actor) => {
        this.actorStateManagerService.addActor(actor);
      })
    );
  }

  editActor(id: ActorId, payload: EditActorWriteModel): Observable<Actor> {
    return this.actorHttpService.update<Actor>(
      id,
      (payload as unknown) as Actor,
      { mapResponseFn: (res) => this.actorHttpService.normalize(res).actor[id] }
    );
  }
}
