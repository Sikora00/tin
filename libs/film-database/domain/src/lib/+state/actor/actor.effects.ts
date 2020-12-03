import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ActorActions from './actor.actions';
import { ActorDataService } from '../../infrastructure/actor.data.service';

@Injectable()
export class ActorEffects {
  loadActor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActorActions.loadActor),
      switchMap((action) =>
        this.actorDataService.load().pipe(
          map((actor) => ActorActions.loadActorSuccess({ actor })),
          catchError((error) => of(ActorActions.loadActorFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private actorDataService: ActorDataService
  ) {}
}
