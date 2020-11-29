import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as DebtActions from './debt.actions';
import { Debt } from '../../entities/debt';

export const DEBT_FEATURE_KEY = 'debt';

export interface State extends EntityState<Debt> {
  selectedId?: string | number; // which Debt record has been selected
  loaded: boolean; // has the Debt list been loaded
  error?: string | null; // last known error (if any)
}

export interface DebtPartialState {
  readonly [DEBT_FEATURE_KEY]: State;
}

export const debtAdapter: EntityAdapter<Debt> = createEntityAdapter<Debt>();

export const initialState: State = debtAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const debtReducer = createReducer(
  initialState,
  on(DebtActions.loadDebt, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(DebtActions.loadDebtSuccess, (state, { debt }) =>
    debtAdapter.upsertMany(debt, { ...state, loaded: true })
  ),
  on(DebtActions.loadDebtFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return debtReducer(state, action);
}
