import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FilmAddFacade } from '@tin/film-database/domain';

@Component({
  selector: 'film-database-film-add',
  templateUrl: './film-add.component.html',
  styleUrls: ['./film-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-host' },
})
export class FilmAddComponent {
  constructor(private filmAddFacade: FilmAddFacade) {}
}
