import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Actor } from '../domain/entities/actor';
import { ActorId } from '../domain/value-objects/actor-id.value-object';

@Injectable({ providedIn: 'root' })
export class ActorDataService {
  private readonly entities = {
    1: {
      id: 1,
      name: 'Leonardo',
      surname: 'DiCaprio',
      description: 'Lorem ipsum dolor sit amet',
      biography:
        'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      thumbnailUrl: 'https://fwcdn.pl/ppo/00/30/30/449647.2.jpg',
      movies: [1],
    },
    2: {
      id: 2,
      name: 'At vero eos',
      surname: 'DiCaprio',
      description: 'At vero eos et accusam et justo duo dolores',
      biography:
        'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      thumbnailUrl: 'https://fwcdn.pl/ppo/00/30/30/449647.2.jpg',
      movies: [],
    },
    3: {
      id: 3,
      name: 'Duis autem',
      surname: 'DiCaprio',
      description: 'Duis autem vel eum iriure dolor in hendrerit',
      biography:
        'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      thumbnailUrl: 'https://fwcdn.pl/ppo/00/30/30/449647.2.jpg',
      movies: [],
    },
  };

  constructor(private http: HttpClient) {}

  load(): Observable<Actor[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Actor[]>(url, {params, headers});
        */

    return of(Object.values(this.entities));
  }

  loadSingle(id: ActorId): Observable<Actor> {
    return of(this.entities[id]);
  }
}
