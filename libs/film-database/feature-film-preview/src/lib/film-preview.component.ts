import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Film, FilmPreviewFacade } from '@tin/film-database/domain';

@Component({
  selector: 'film-database-film-preview',
  templateUrl: './film-preview.component.html',
  styleUrls: ['./film-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-host' },
})
export class FilmPreviewComponent {
  film: Film = {
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

  constructor(private filmPreviewFacade: FilmPreviewFacade) {}
}
