import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  Actor,
  Movie,
  MoviePreview,
  MoviePreviewFacade,
} from '@tin/movie-database/domain';

@Component({
  selector: 'movie-database-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-host' },
})
export class MoviePreviewComponent {
  movie: MoviePreview = {
    id: 1,
    thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
    releaseDate: new Date(),
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet',
    cast: [
      {
        role: 'Tadeusz Norek',
        id: 1,
        actor: {
          id: 1,
          name: 'Artur Barciś',
          thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        } as Actor,
      },
      {
        role: 'Tadeusz Norek',
        id: 2,
        actor: {
          id: 1,
          name: 'Artur Barciś',
          thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        } as Actor,
      },
      {
        role: 'Tadeusz Norek',
        id: 3,
        actor: {
          id: 1,
          name: 'Artur Barciś',
          thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        } as Actor,
      },
      {
        role: 'Tadeusz Norek',
        id: 3,
        actor: {
          id: 1,
          name: 'Artur Barciś',
          thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        } as Actor,
      },
      {
        role: 'Tadeusz Norek',
        id: 3,
        actor: {
          id: 1,
          name: 'Artur Barciś',
          thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        } as Actor,
      },
      {
        role: 'Tadeusz Norek',
        id: 3,
        actor: {
          id: 1,
          name: 'Artur Barciś',
          thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        } as Actor,
      },
      {
        role: 'Tadeusz Norek',
        id: 3,
        actor: {
          id: 1,
          name: 'Artur Barciś',
          thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        } as Actor,
      },
    ],
  };

  constructor(private moviePreviewFacade: MoviePreviewFacade) {}
}
