import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ActorHttpService } from './actor-http.service';
import { ActorStateManagerService } from './actor-state-manager.service';
import { Actor, ActorId } from '@tin/movie-database/domain';

@Injectable({ providedIn: 'root' })
export class ActorDataService {
  constructor(
    private actorHttpService: ActorHttpService,
    private actorStateManagerService: ActorStateManagerService
  ) {}
  load(): Observable<Actor[]> {
    return this.actorHttpService
      .load()
      .pipe(tap((actors) => this.actorStateManagerService.remember(actors)));
  }

  getSingleOnce(id: ActorId): Observable<Actor> {
    return this.actorStateManagerService.getEntityOnce(id).pipe(
      switchMap((maybeActor) => {
        if (!maybeActor) {
          return this.actorHttpService
            .loadSingle(id)
            .pipe(
              tap((actor) => this.actorStateManagerService.remember([actor]))
            );
        }
        return of(maybeActor);
      })
    );
  }

  deleteActor(actorId: ActorId): Observable<void> {
    return this.actorHttpService
      .deleteActor(actorId)
      .pipe(tap(() => this.actorStateManagerService.deleteActor(actorId)));
  }
}
