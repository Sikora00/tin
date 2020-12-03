import { createAction, props } from '@ngrx/store';
import { Actor } from '../../entities/actor';

export const loadActor = createAction('[Actor] Load Actor');

export const loadActorSuccess = createAction(
  '[Actor] Load Actor Success',
  props<{ actor: Actor[] }>()
);

export const loadActorFailure = createAction(
  '[Actor] Load Actor Failure',
  props<{ error: any }>()
);
