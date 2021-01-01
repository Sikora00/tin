import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Actor, ActorId } from '@tin/movie-database/domain';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ActorHttpService {
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
    return of(Object.values(this.entities)).pipe(delay(2000));
  }

  deleteActor(actorId: ActorId): Observable<void> {
    return of(null);
  }

  loadSingle(id: ActorId): Observable<Actor> {
    return of(this.entities[id]).pipe(delay(2000));
  }
}
