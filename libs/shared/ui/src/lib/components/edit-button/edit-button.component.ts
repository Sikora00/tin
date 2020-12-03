import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'tin-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditButtonComponent {
  @Output()
  click = new EventEmitter<void>();
}
