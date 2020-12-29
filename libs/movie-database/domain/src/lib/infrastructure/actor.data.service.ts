import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Actor } from '../entities/actor';

@Injectable({ providedIn: 'root' })
export class ActorDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<Actor[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Actor[]>(url, {params, headers});
        */

    return of([
      {
        id: 1,
        name: 'Leonardo DiCaprio',
        description: 'Lorem ipsum dolor sit amet',
        biography:
          'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        thumbnailUrl: 'https://fwcdn.pl/ppo/00/30/30/449647.2.jpg',
        movies: [],
      },
      {
        id: 2,
        name: 'At vero eos',
        description: 'At vero eos et accusam et justo duo dolores',
        biography:
          'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        thumbnailUrl: 'https://fwcdn.pl/ppo/00/30/30/449647.2.jpg',
        movies: [],
      },
      {
        id: 3,
        name: 'Duis autem',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
        biography:
          'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        thumbnailUrl: 'https://fwcdn.pl/ppo/00/30/30/449647.2.jpg',
        movies: [],
      },
    ]);
  }
}
