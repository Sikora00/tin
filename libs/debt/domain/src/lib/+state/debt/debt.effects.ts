import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as DebtActions from './debt.actions';
import { DebtDataService } from '../../infrastructure/debt.data.service';

@Injectable()
export class DebtEffects {
  loadDebt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DebtActions.loadDebt),
      switchMap((action) =>
        this.debtDataService.load().pipe(
          map((debt) => DebtActions.loadDebtSuccess({ debt })),
          catchError((error) => of(DebtActions.loadDebtFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private debtDataService: DebtDataService
  ) {}
}
