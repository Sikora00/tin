import { Component, OnInit } from '@angular/core';
import { ActorEditFacade } from '@tin/movie-database/domain';

@Component({
  selector: 'movie-database-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.scss'],
  host: { class: 'feature-host' },
})
export class ActorEditComponent implements OnInit {
  constructor(private actorEditFacade: ActorEditFacade) {}

  ngOnInit() {}
}
