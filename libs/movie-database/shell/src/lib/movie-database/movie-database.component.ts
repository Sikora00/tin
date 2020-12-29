import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tin-movie-database',
  templateUrl: './movie-database.component.html',
  styleUrls: ['./movie-database.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-host' },
})
export class MovieDatabaseComponent {}
