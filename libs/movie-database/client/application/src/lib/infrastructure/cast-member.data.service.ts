import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CastMember, CastMemberId } from '@tin/movie-database/domain';
import { CastMemberQuery } from '../+state/cast-member/cast-member.query';

@Injectable({ providedIn: 'root' })
export class CastMemberDataService {
  constructor(
    private http: HttpClient,
    private castMemberQuery: CastMemberQuery
  ) {}

  loadSingle(castMemberId: CastMemberId): Observable<CastMember> {
    if (this.castMemberQuery.hasEntity(castMemberId)) {
      return of(this.castMemberQuery.getEntity(castMemberId));
    }
    throw new Error("Shouldn't be load directly");
  }
}
