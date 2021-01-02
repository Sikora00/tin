import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
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
