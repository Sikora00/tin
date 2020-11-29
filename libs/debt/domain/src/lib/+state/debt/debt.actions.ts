import { createAction, props } from '@ngrx/store';
import { Debt } from '../../entities/debt';

export const loadDebt = createAction('[Debt] Load Debt');

export const loadDebtSuccess = createAction(
  '[Debt] Load Debt Success',
  props<{ debt: Debt[] }>()
);

export const loadDebtFailure = createAction(
  '[Debt] Load Debt Failure',
  props<{ error: any }>()
);
