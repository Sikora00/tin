import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DebtComponent } from './debt/debt.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DebtComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@tin/debt/feature-list').then(
                (m) => m.DebtFeatureListModule
              ),
          },
          {
            path: 'add',
            loadChildren: () =>
              import('@tin/debt/feature-add-debt').then(
                (m) => m.DebtFeatureAddDebtModule
              ),
          },
          {
            path: ':id',
            loadChildren: () =>
              import('@tin/debt/feature-preview').then(
                (m) => m.DebtFeaturePreviewModule
              ),
          },
          {
            path: ':id/edit',
            loadChildren: () =>
              import('@tin/debt/feature-edit').then(
                (m) => m.DebtFeatureEditModule
              ),
          },
        ],
      },
    ]),
  ],
  declarations: [DebtComponent],
})
export class DebtShellModule {}
