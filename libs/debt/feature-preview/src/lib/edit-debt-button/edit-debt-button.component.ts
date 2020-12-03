import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'debt-edit-debt-button',
  templateUrl: './edit-debt-button.component.html',
  styleUrls: ['./edit-debt-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditDebtButtonComponent {
  @Output()
  click = new EventEmitter<void>()
}
