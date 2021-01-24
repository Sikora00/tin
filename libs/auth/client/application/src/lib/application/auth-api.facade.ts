import { Injectable } from '@angular/core';
import { AuthDataService } from '@tin/auth/client/application';

@Injectable({ providedIn: 'root' })
export class AuthApiFacade {
  isUserLogged$ = this.authDataService.isUserLogged$;
  constructor(private authDataService: AuthDataService) {}
}
