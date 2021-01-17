import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { mapTo, switchMap, tap, timeout } from 'rxjs/operators';
import { merge, of, timer } from 'rxjs';

@Component({
  selector: 'tin-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackbarComponent {
  notification$ = this.service.notifications$.pipe(
    switchMap((message) => merge(of(message), timer(4000).pipe(mapTo(null))))
  );

  constructor(private service: SnackbarService) {}
}
