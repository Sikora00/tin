import { Component, OnInit } from '@angular/core';
import { ActorAddFacade } from '@tin/movie-database/domain';

@Component({
  selector: 'movie-database-actor-add',
  templateUrl: './actor-add.component.html',
  styleUrls: ['./actor-add.component.scss'],
  host: { class: 'feature-host' },
})
export class ActorAddComponent implements OnInit {
  constructor(private actorAddFacade: ActorAddFacade) {}

  ngOnInit() {}
}
