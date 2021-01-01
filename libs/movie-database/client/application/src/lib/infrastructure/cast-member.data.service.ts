import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CastMember } from '@tin/movie-database/domain';
import { CastMemberId } from '@tin/movie-database/domain';
import { delay, tap } from 'rxjs/operators';
import { CastMemberStore } from '../+state/cast-member/cast-member.store';
import { CastMemberQuery } from '../+state/cast-member/cast-member.query';

@Injectable({ providedIn: 'root' })
export class CastMemberDataService {
  constructor(
    private http: HttpClient,
    private castMemberQuery: CastMemberQuery,
    private castMemberStore: CastMemberStore
  ) {}

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

  loadSingle(castMemberId: CastMemberId) {
    if (this.castMemberQuery.hasEntity(castMemberId)) {
      return of(this.castMemberQuery.getEntity(castMemberId));
    }
    return of({
      id: 1,
      role: 'Arnold Boczek',
      actor: 1,
      movie: 1,
    }).pipe(
      delay(2000),
      tap((castMember) => this.castMemberStore.add(castMember))
    );
  }
}
