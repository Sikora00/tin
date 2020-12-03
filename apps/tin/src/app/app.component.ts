import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-host' },
})
export class AppComponent {}
