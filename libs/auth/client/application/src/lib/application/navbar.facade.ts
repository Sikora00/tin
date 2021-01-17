import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthDataService } from '@tin/auth/client/application';
import { Subscription } from 'rxjs';

@Injectable()
export class NavbarFacade {
  isUserLogged$ = this.authDataService.isUserLogged$;

  sub: Subscription;

  constructor(
    private authDataService: AuthDataService,
    private router: Router
  ) {}

  init(presenter: NavbarPresenter): void {
    this.sub = this.isUserLogged$.subscribe((isUserLogged) => {
      if (isUserLogged) {
        presenter.displayLogoutRedirect();
      } else {
        presenter.displayLoginRedirect();
      }
    });
  }

  onLogout(): void {
    this.authDataService.forgotAccessToken();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  goToLogin(): Promise<void> {
    return this.router.navigate(['/login']).then();
  }
}

export interface NavbarPresenter {
  displayLoginRedirect(): void;

  displayLogoutRedirect(): void;
}
