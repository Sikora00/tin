import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Debt } from '@tin/debt/domain';

@Component({
  selector: 'debt-dept-card',
  templateUrl: './debt-card.component.html',
  styleUrls: ['./debt-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DebtCardComponent {
  @Input()
  debt: Debt;
}
