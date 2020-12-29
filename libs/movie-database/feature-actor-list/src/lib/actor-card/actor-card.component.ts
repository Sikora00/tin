import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Actor } from '@tin/movie-database/domain';

@Component({
  selector: 'movie-database-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorCardComponent {
  @Input()
  actor: Actor;
}
