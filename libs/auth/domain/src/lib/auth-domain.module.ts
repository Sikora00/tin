import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEffects } from './+state/user/user.effects';
import * as fromUser from './+state/user/user.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class AuthDomainModule {}
