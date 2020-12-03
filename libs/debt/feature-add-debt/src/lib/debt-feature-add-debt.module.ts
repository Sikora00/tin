import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtDomainModule } from '@tin/debt/domain';
import { AddDebtComponent } from './add-debt.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    DebtDomainModule,
    RouterModule.forChild([{ path: '', component: AddDebtComponent }]),
  ],
  declarations: [AddDebtComponent],
  exports: [AddDebtComponent],
})
export class DebtFeatureAddDebtModule {}
