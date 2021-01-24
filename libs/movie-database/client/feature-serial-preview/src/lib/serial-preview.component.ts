import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SerialId } from '@tin/movie-database/domain';
import { SerialPreviewPresenter } from '../../../application/src/lib/application/serial/serial-preview/serial-preview-presenter.interface';
import { SerialPreviewReadModel } from '../../../application/src/lib/application/serial/serial-preview/serial-preview.read-model';
import { SerialPreviewFacade } from '../../../application/src/lib/application/serial/serial-preview/serial-preview.facade';

@Component({
  selector: 'movie-database-movie-preview',
  templateUrl: './serial-preview.component.html',
  styleUrls: ['./serial-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-movie-database' },
  providers: [SerialPreviewFacade],
})
export class SerialPreviewComponent implements OnInit, SerialPreviewPresenter {
  serialId: SerialId = +this.activatedRoute.snapshot.paramMap.get('id');
  serial$: Observable<SerialPreviewReadModel>;
  loading: boolean;
  showEdit = false;

  constructor(
    private previewFacade: SerialPreviewFacade,
    private activatedRoute: ActivatedRoute,
    private cdR: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.previewFacade.init(this, this.serialId);
  }

  displayLoading(): void {
    this.loading = true;
  }

  displayPreview(data: Observable<SerialPreviewReadModel>): void {
    this.serial$ = data;
    this.loading = false;
    this.cdR.markForCheck();
  }

  displayEditSerial(): void {
    this.showEdit = true;
    this.cdR.markForCheck();
  }

  hideEditSerial(): void {
    this.showEdit = false;
    this.cdR.markForCheck();
  }
}
