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
        ],
      },
    ]),
  ],
  declarations: [DebtComponent],
})
export class DebtShellModule {}
