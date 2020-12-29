import { Component, OnInit } from '@angular/core';
import { ActorListFacade, loadActor } from '@tin/movie-database/domain';

@Component({
  selector: 'movie-database-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss'],
  host: { class: 'feature-host' },
})
export class ActorListComponent implements OnInit {
  actorList$ = this.actorListFacade.actorList$;

  constructor(private actorListFacade: ActorListFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.actorListFacade.dispatch(loadActor());
  }
}
