import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Movie } from '@tin/movie-database/domain';
import { MovieId } from '@tin/movie-database/domain';

@Injectable({ providedIn: 'root' })
export class MovieHttpService {
  private readonly entities: Record<MovieId, Movie> = {
    1: {
      id: 1,
      actors: [1],
      thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
      releaseDate: new Date(),
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet',
    },
    2: {
      id: 2,
      actors: [],
      thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
      releaseDate: new Date(),
      title: 'At vero eos',
      description: 'At vero eos et accusam et justo duo dolores',
    },
    3: {
      id: 3,
      actors: [],
      thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
      releaseDate: new Date(),
      title: 'Duis autem',
      description: 'Duis autem vel eum iriure dolor in hendrerit',
    },
  };

  load(): Observable<Movie[]> {
    return of(Object.values(this.entities)).pipe(delay(2000));
  }

  loadSingle(id: MovieId): Observable<Movie> {
    return of(this.entities[id]).pipe(delay(2000));
  }

  deleteMovie(movieId: MovieId): Observable<void> {
    return of(null);
  }
}
