import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private _accessToken = new BehaviorSubject(null);
  accessToken$ = this._accessToken.asObservable();
  isUserLogged$ = this._accessToken.pipe(map(Boolean));

  constructor() {}

  saveAccessToken(accessToken: string): void {
    this._accessToken.next(accessToken);
  }

  forgotAccessToken(): void {
    this._accessToken.next(null);
  }
}
