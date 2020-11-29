import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtEffects } from './+state/debt/debt.effects';
import * as fromDebt from './+state/debt/debt.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromDebt.DEBT_FEATURE_KEY, fromDebt.reducer),
    EffectsModule.forFeature([DebtEffects]),
  ],
})
export class DebtDomainModule {}
