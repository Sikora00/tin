import { Component, OnInit } from '@angular/core';
import { ActorListFacade, loadActor } from '@tin/film-database/domain';

@Component({
  selector: 'film-database-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss'],
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
