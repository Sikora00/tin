import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  Actor,
  ActorListFacade,
  ActorListPresenter,
} from '@tin/movie-database/domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'movie-database-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss'],
  host: { class: 'feature-host' },
  providers: [ActorListFacade],
})
export class ActorListComponent implements OnInit, ActorListPresenter {
  actorList$: Observable<Actor[]>;
  loading: boolean;

  constructor(
    private actorListFacade: ActorListFacade,
    private cdR: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.actorListFacade.init(this);
  }

  displayList(actors$: Observable<Actor[]>): void {
    this.actorList$ = actors$;
    this.loading = false;
    this.cdR.markForCheck();
  }

  displayLoading(): void {
    this.loading = true;
  }
}
