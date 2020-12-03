import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'debt-add-debt-button',
  templateUrl: './add-debt-button.component.html',
  styleUrls: ['./add-debt-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddDebtButtonComponent {
  @Output()
  click = new EventEmitter<void>();
}
