import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Actor, SerialId } from '@tin/movie-database/domain';
import { SerialAddEditForm } from '../../../../../application/src/lib/application/serial/add-edit/serial-add-edit.form';
import { SerialAddPresenterInterface } from '../../../../../application/src/lib/application/serial/add/serial-add-presenter.interface';
import { SerialAddFacade } from '../../../../../application/src/lib/application/serial/add/serial-add.facade';
import { ActivatedRoute } from '@angular/router';
import { SerialEditFacade } from '../../../../../application/src/lib/application/serial/edit/serial-edit.facade';
import { SerialEditPresenterInterface } from '../../../../../application/src/lib/application/serial/edit/serial-edit-presenter.interface';
import { SnackbarService } from '@tin/shared/ui-snackbar';

@Component({
  selector: 'tin-serial-add-edit',
  templateUrl: './serial-add-edit.component.html',
  styleUrls: ['./serial-add-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-movie-database' },
  providers: [SerialAddFacade, SerialEditFacade],
})
export class SerialAddEditComponent
  implements OnInit, SerialAddPresenterInterface, SerialEditPresenterInterface {
  actors$: Observable<Actor[]>;
  facade: SerialAddFacade | SerialEditFacade;
  form: SerialAddEditForm;
  loading: boolean;
  serialId: SerialId | null = this.activatedRoute.snapshot.paramMap.get('id')
    ? +this.activatedRoute.snapshot.paramMap.get('id')
    : null;
  editMode: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    addFacade: SerialAddFacade,
    editFacade: SerialEditFacade,
    private cdR: ChangeDetectorRef,
    private notificationService: SnackbarService
  ) {
    this.editMode = !!this.serialId;
    this.facade = this.editMode ? editFacade : addFacade;
  }

  displaySerialAddedNotification(): void {
    this.notificationService.displayNotification(`Dodano serial`);
  }

  displayForm(form: SerialAddEditForm, actors: Observable<Actor[]>): void {
    this.form = form;
    this.actors$ = actors;
    this.loading = false;
    this.cdR.markForCheck();
  }

  displayLoading(): void {
    this.loading = true;
  }

  ngOnInit(): void {
    this.facade.init(this, this.serialId);
  }

  onClickAddActor(): void {
    this.facade.addActor(this.form);
  }

  onClickRemoveActor(actorIndex: number): void {
    this.facade.removeActor(this.form, actorIndex);
  }

  onSubmit(): void {
    this.facade.onSubmit(this, this.form, this.serialId);
  }

  displayEditSuccessNotification(): void {
    this.notificationService.displayNotification(`Zaktualizowano serial`);
  }
}
