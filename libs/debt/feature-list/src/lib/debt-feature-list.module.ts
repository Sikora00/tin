import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtDomainModule } from '@tin/debt/domain';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { DebtCardComponent } from './debt-card/debt-card.component';

@NgModule({
  imports: [
    CommonModule,
    DebtDomainModule,
    RouterModule.forChild([{ path: '', component: ListComponent }]),
  ],
  declarations: [ListComponent, DebtCardComponent],
})
export class DebtFeatureListModule {}
