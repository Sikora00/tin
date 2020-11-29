import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  DEBT_FEATURE_KEY,
  State,
  DebtPartialState,
  debtAdapter,
} from './debt.reducer';

// Lookup the 'Debt' feature state managed by NgRx
export const getDebtState = createFeatureSelector<DebtPartialState, State>(
  DEBT_FEATURE_KEY
);

const { selectAll, selectEntities } = debtAdapter.getSelectors();

export const getDebtLoaded = createSelector(
  getDebtState,
  (state: State) => state.loaded
);

export const getDebtError = createSelector(
  getDebtState,
  (state: State) => state.error
);

export const getAllDebt = createSelector(getDebtState, (state: State) =>
  selectAll(state)
);

export const getDebtEntities = createSelector(getDebtState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getDebtState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getDebtEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
