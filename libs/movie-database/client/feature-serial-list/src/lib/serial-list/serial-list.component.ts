import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Serial, SerialId} from "@tin/movie-database/domain";
import {SerialDeleteFacade, SerialListFacade, SerialListPresenter} from "@tin/movie-database/client/application";

@Component({
  selector: 'tin-serial-list',
  templateUrl: './serial-list.component.html',
  styleUrls: ['./serial-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-movie-database' },
  providers: [SerialDeleteFacade, SerialListFacade]
})
export class SerialListComponent implements OnInit, SerialListPresenter {
  serialList$: Observable<Serial[]>;
  loading: boolean;

  constructor(
    private listFacade: SerialListFacade,
    private deleteFacade: SerialDeleteFacade,
    private cdR: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.listFacade.init(this);
  }

  displayLoading(): void {
    this.loading = true;
  }

  displayList(movies: Observable<Serial[]>): void {
    this.serialList$ = movies;
    this.loading = false;
    this.cdR.markForCheck();
  }

  onDeleteSerial(id: SerialId): void {
    this.deleteFacade.deleteSerial(id)
  }
}
