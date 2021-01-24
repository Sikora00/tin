import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RegisterWriteModel } from '../../../../../domain/src/lib/write-models/register.write-model';
import { LoginReadModel } from '../../../../../domain/src/lib/write-models/login.read-model';
import { LoginWriteModel } from '../../../../../domain/src/lib/write-models/login.write-model';
import { AuthHttpService } from './auth-http.service';
import { AuthStateService } from './auth-state.service';
import { tap } from 'rxjs/operators';
import { AuthStorageService } from './auth-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthDataService {
  authToken$ = this.state.accessToken$;
  isUserLogged$ = this.state.isUserLogged$;
  constructor(
    private http: AuthHttpService,
    private state: AuthStateService,
    private storage: AuthStorageService
  ) {
    this.applyAccessTokenIfSaved();
  }

  login(value: LoginWriteModel): Observable<LoginReadModel> {
    return this.http.login(value).pipe(
      tap(({ accessToken }) => {
        this.state.saveAccessToken(accessToken);
        this.storage.saveAccessToken(accessToken);
      })
    );
  }

  register(value: RegisterWriteModel): Observable<void> {
    return this.http.register(value);
  }

  forgotAccessToken(): void {
    this.state.forgotAccessToken();
    this.storage.forgotAccessToken();
  }

  private applyAccessTokenIfSaved(): void {
    const accessToken = this.storage.getAccessToken();
    if (accessToken) {
      this.state.saveAccessToken(accessToken);
    }
  }
}
