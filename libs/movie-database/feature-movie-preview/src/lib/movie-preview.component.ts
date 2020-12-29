import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Movie, MoviePreviewFacade } from '@tin/movie-database/domain';

@Component({
  selector: 'movie-database-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-host' },
})
export class MoviePreviewComponent {
  movie: Movie = {
    id: 1,
    thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
    releaseDate: new Date(),
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet',
    cast: [
      {
        role: 'Tadeusz Norek',
        actor: {
          id: 1,
          name: 'Artur Barciś',
          thumbnail: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        },
      },
      {
        role: 'Tadeusz Norek',
        actor: {
          id: 1,
          name: 'Artur Barciś',
          thumbnail: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        },
      },
      {
        role: 'Tadeusz Norek',
        actor: {
          id: 1,
          name: 'Artur Barciś',
          thumbnail: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        },
      },
      {
        role: 'Tadeusz Norek',
        actor: {
          id: 1,
          name: 'Artur Barciś',
          thumbnail: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        },
      },
      {
        role: 'Tadeusz Norek',
        actor: {
          id: 1,
          name: 'Artur Barciś',
          thumbnail: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        },
      },
      {
        role: 'Tadeusz Norek',
        actor: {
          id: 1,
          name: 'Artur Barciś',
          thumbnail: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        },
      },
      {
        role: 'Tadeusz Norek',
        actor: {
          id: 1,
          name: 'Artur Barciś',
          thumbnail: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        },
      },
    ],
  };

  constructor(private moviePreviewFacade: MoviePreviewFacade) {}
}
