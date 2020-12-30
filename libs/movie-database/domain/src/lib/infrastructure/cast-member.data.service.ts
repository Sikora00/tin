import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from '../domain/entities/movie';
import { CastMember } from '@tin/movie-database/domain';
import { CastMemberId } from '../domain/value-objects/cast-member-id.value-object';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CastMemberDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<CastMember[]> {
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
        role: 'Arnold Boczek',
        actor: 1,
        movie: 1,
      },
    ]).pipe(delay(2000));
  }

  loadSingle(movieId: CastMemberId) {
    return of({
      id: 1,
      role: 'Arnold Boczek',
      actor: 1,
      movie: 1,
    }).pipe(delay(2000));
  }
}
