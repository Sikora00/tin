import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtDomainModule } from '@tin/debt/domain';
import { EditComponent } from './edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    DebtDomainModule,
    RouterModule.forChild([{ path: '', component: EditComponent }]),
  ],
  declarations: [EditComponent],
  exports: [EditComponent],
})
export class DebtFeatureEditModule {}
