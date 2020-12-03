import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'film-database-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-host' },
})
export class FilmEditComponent {}
