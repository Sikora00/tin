import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tin-film-database',
  templateUrl: './film-database.component.html',
  styleUrls: ['./film-database.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-host' },
})
export class FilmDatabaseComponent {}
