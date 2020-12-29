import { Component, OnInit } from '@angular/core';
import {
  Actor,
  ActorPreview,
  ActorPreviewFacade,
} from '@tin/movie-database/domain';

@Component({
  selector: 'movie-database-actor-preview',
  templateUrl: './actor-preview.component.html',
  styleUrls: ['./actor-preview.component.scss'],
  host: { class: 'feature-host' },
})
export class ActorPreviewComponent implements OnInit {
  actor: ActorPreview = {
    id: 1,
    name: 'Artur Barciś',
    thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
    biography:
      'Loerm Ipsum. Loerm Ipsum, Loerm Ipsum, Loerm Ipsum. Loerm Ipsum. Loerm Ipsum, Loerm Ipsum, Loerm Ipsum.',
    movies: [
      {
        id: 1,
        movie: {
          id: 1,
          thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
          releaseDate: new Date(),
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet',
        },
      },
    ],
  };
  constructor(private actorPreviewFacade: ActorPreviewFacade) {}

  ngOnInit() {}
}
