import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  NavbarFacade,
  NavbarPresenter,
} from '../../../../application/src/lib/application/navbar.facade';

@Component({
  selector: 'tin-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NavbarFacade],
})
export class AuthNavbarComponent implements OnInit, NavbarPresenter {
  isUserLogged: boolean;
  constructor(private facade: NavbarFacade) {}

  ngOnInit(): void {
    this.facade.init(this);
  }

  onRedirect(): void {
    if (this.isUserLogged) {
      this.facade.onLogout();
    } else {
      this.facade.goToLogin();
    }
  }

  displayLoginRedirect(): void {
    this.isUserLogged = false;
  }

  displayLogoutRedirect(): void {
    this.isUserLogged = true;
  }
}
