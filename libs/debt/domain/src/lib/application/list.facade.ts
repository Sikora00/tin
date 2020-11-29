import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromDebt from '../+state/debt/debt.reducer';
import * as DebtSelectors from '../+state/debt/debt.selectors';

@Injectable({ providedIn: 'root' })
export class ListFacade {
  loaded$ = this.store.pipe(select(DebtSelectors.getDebtLoaded));
  debtList$ = this.store.pipe(select(DebtSelectors.getAllDebt));
  selectedDebt$ = this.store.pipe(select(DebtSelectors.getSelected));

  constructor(private store: Store<fromDebt.DebtPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
