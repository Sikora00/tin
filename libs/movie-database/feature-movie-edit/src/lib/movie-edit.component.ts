import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'movie-database-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-host' },
})
export class MovieEditComponent {}
