import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from '../entities/movie';

@Injectable({ providedIn: 'root' })
export class MovieDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<Movie[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Film[]>(url, {params, headers});
        */

    return of([
      {
        id: 1,
        castMemberIds: [],
        thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        releaseDate: new Date(),
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 2,
        castMemberIds: [],
        thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        releaseDate: new Date(),
        title: 'At vero eos',
        description: 'At vero eos et accusam et justo duo dolores',
      },
      {
        id: 3,
        castMemberIds: [],
        thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        releaseDate: new Date(),
        title: 'Duis autem',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
      },
    ]);
  }
}
