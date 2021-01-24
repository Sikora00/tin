import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Serial, SerialId } from '@tin/movie-database/domain';
import {
  SerialDeleteFacade,
  SerialDeletePresenter,
  SerialListFacade,
  SerialListPresenter,
} from '@tin/movie-database/client/application';
import { SnackbarService } from '@tin/shared/ui-snackbar';

@Component({
  selector: 'tin-serial-list',
  templateUrl: './serial-list.component.html',
  styleUrls: ['./serial-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-movie-database' },
  providers: [SerialDeleteFacade, SerialListFacade],
})
export class SerialListComponent
  implements OnInit, SerialListPresenter, SerialDeletePresenter {
  serialList$: Observable<Serial[]>;
  loading: boolean;
  showAddSerial = false;
  showDeleteSerial = false;

  constructor(
    private listFacade: SerialListFacade,
    private deleteFacade: SerialDeleteFacade,
    private cdR: ChangeDetectorRef,
    private notificationService: SnackbarService
  ) {}

  displaySerialDeletedNotification(): void {
    this.notificationService.displayNotification('Usunięto serial');
  }

  ngOnInit() {
    this.listFacade.init(this);
  }

  displayAddSerial(): void {
    this.showAddSerial = true;
    this.cdR.markForCheck();
  }

  displayDeleteSerial(): void {
    this.showDeleteSerial = true;
    this.cdR.markForCheck();
  }

  displayLoading(): void {
    this.loading = true;
  }

  displayList(movies: Observable<Serial[]>): void {
    this.serialList$ = movies;
    this.loading = false;
    this.cdR.markForCheck();
  }

  hideAddSerial(): void {
    this.showAddSerial = false;
    this.cdR.markForCheck();
  }

  hideDeleteSerial(): void {
    this.showDeleteSerial = false;
    this.cdR.markForCheck();
  }

  onDeleteSerial(id: SerialId): void {
    this.deleteFacade.deleteSerial(this, id);
  }
}
