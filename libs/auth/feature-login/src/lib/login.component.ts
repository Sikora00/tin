import { Component, OnInit } from '@angular/core';
import { LoginFacade, loadUser } from '@tin/auth/domain';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userList$ = this.loginFacade.userList$;

  constructor(private loginFacade: LoginFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.loginFacade.dispatch(loadUser());
  }
}
