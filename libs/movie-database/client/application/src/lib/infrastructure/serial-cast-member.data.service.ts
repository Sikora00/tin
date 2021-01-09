import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { CastMemberId } from '@tin/movie-database/domain';
import { SerialCastMemberQuery } from '../+state/serial-cast-member/serial-cast-member.query';

@Injectable({ providedIn: 'root' })
export class SerialCastMemberDataService {
  constructor(
    private http: HttpClient,
    private castMemberQuery: SerialCastMemberQuery
  ) {}

  loadSingle(castMemberId: CastMemberId) {
    if (this.castMemberQuery.hasEntity(castMemberId)) {
      return of(this.castMemberQuery.getEntity(castMemberId));
    }
    throw new Error("Shouldn't be load directly");
  }
}
