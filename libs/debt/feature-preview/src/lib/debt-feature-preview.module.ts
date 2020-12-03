import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtDomainModule } from '@tin/debt/domain';
import { PreviewComponent } from './preview.component';
import { RouterModule } from '@angular/router';
import { EditDebtButtonComponent } from './edit-debt-button/edit-debt-button.component';

@NgModule({
  imports: [
    CommonModule,
    DebtDomainModule,
    RouterModule.forChild([{ path: '', component: PreviewComponent }]),
  ],
  declarations: [PreviewComponent, EditDebtButtonComponent],
})
export class DebtFeaturePreviewModule {}
