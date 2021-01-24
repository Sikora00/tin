import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Actor, ActorId } from '@tin/movie-database/domain';

@Component({
  selector: 'movie-database-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorCardComponent {
  @Input()
  actor: Actor;
  @Input()
  showDeleteActor = false;
  @Output()
  deleteActor = new EventEmitter<ActorId>();

  onDeleteActor(): void {
    this.deleteActor.emit(this.actor.id);
  }
}
