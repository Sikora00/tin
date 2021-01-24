import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  ActorDeleteFacade,
  ActorDeletePresenter,
  ActorListFacade,
  ActorListPresenter,
} from '@tin/movie-database/client/application';
import { Actor, ActorId } from '@tin/movie-database/domain';
import { Observable } from 'rxjs';
import { SnackbarService } from '@tin/shared/ui-snackbar';

@Component({
  selector: 'movie-database-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss'],
  host: { class: 'feature-movie-database' },
  providers: [ActorListFacade, ActorDeleteFacade],
})
export class ActorListComponent
  implements OnInit, ActorListPresenter, ActorDeletePresenter {
  actorList$: Observable<Actor[]>;
  loading: boolean;
  showAddActor = false;
  showDeleteActor = false;

  constructor(
    private actorListFacade: ActorListFacade,
    private actorDeleteFacade: ActorDeleteFacade,
    private cdR: ChangeDetectorRef,
    private notificationService: SnackbarService
  ) {}

  ngOnInit() {
    this.actorListFacade.init(this);
  }

  displayAddActor(): void {
    this.showAddActor = true;
    this.cdR.markForCheck();
  }

  displayDeleteActor(): void {
    this.showDeleteActor = true;
    this.cdR.markForCheck();
  }

  displayList(actors$: Observable<Actor[]>): void {
    this.actorList$ = actors$;
    this.loading = false;
    this.cdR.markForCheck();
  }

  displayLoading(): void {
    this.loading = true;
  }

  hideAddActor(): void {
    this.showAddActor = false;
    this.cdR.markForCheck();
  }

  hideDeleteActor(): void {
    this.showDeleteActor = false;
    this.cdR.markForCheck();
  }

  onDeleteActor(actorId: ActorId): void {
    this.actorDeleteFacade.deleteActor(this, actorId);
  }

  displayActorDeletedNotification(): void {
    this.notificationService.displayNotification('Usunięto aktora');
  }
}
