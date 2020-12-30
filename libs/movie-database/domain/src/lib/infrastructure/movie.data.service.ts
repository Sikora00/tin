import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from '../domain/entities/movie';
import { MovieId } from '../domain/value-objects/movie-id.value-object';
import { Dictionary } from '@ngrx/entity';

@Injectable({ providedIn: 'root' })
export class MovieDataService {
  private readonly entities: Dictionary<Movie> = {
    1: {
      id: 1,
      actors: [],
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

  constructor(private http: HttpClient) {}

  load(): Observable<Movie[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Film[]>(url, {params, headers});
        */

    return of(Object.values(this.entities));
  }

  loadSinge(movieId: MovieId): Observable<Movie> {
    return of(this.entities[movieId]);
  }
}
