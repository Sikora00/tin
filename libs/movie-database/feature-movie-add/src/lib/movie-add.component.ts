import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MovieAddFacade } from '@tin/movie-database/domain';

@Component({
  selector: 'movie-database-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-host' },
})
export class MovieAddComponent {
  constructor(private movieAddFacade: MovieAddFacade) {}
}
