import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Actor } from '@tin/movie-database/domain';
import { ActorId } from '../../../../domain/src/lib/domain/value-objects/actor-id.value-object';

@Component({
  selector: 'movie-database-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorCardComponent {
  @Input()
  actor: Actor;
  @Output()
  deleteActor = new EventEmitter<ActorId>();

  onDeleteActor(): void {
    this.deleteActor.emit(this.actor.id);
  }
}
