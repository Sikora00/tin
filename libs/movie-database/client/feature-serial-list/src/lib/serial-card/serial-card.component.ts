import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Serial, SerialId } from '@tin/movie-database/domain';

@Component({
  selector: 'movie-database-serial-card',
  templateUrl: './serial-card.component.html',
  styleUrls: ['./serial-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SerialCardComponent {
  @Input()
  serial: Serial;
  @Input()
  showDeleteSerial = false;
  @Output()
  deleteSerial = new EventEmitter<SerialId>();

  onDelete(): void {
    this.deleteSerial.emit(this.serial.id);
  }
}
