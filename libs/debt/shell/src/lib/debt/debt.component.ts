import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tin-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DebtComponent {}
