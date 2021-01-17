import { Component, OnInit } from '@angular/core';
import {
  LoginFacade,
  LoginForm,
  LoginPresenter,
} from '@tin/auth/client/application';
import { NotificationType, SnackbarService } from '@tin/shared/ui-snackbar';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, LoginPresenter {
  form: LoginForm;

  constructor(
    private loginFacade: LoginFacade,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit() {
    this.loginFacade.init(this);
  }

  displayForm(form): void {
    this.form = form;
  }

  displayLoginFailedNotification(): void {
    this.snackbarService.displayNotification(
      'Logowanie nie powiodło się',
      NotificationType.Error
    );
  }

  async onSubmit(): Promise<void> {
    await this.loginFacade.submitForm(this, this.form);
  }
}
