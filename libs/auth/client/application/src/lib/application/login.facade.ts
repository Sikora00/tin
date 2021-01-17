import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthDataService } from '../infrastructure/auth-data.service';
import { LoginWriteModel } from '../../../../../domain/src/lib/write-models/login.write-model';

@Injectable({ providedIn: 'root' })
export class LoginFacade {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authDataService: AuthDataService
  ) {}

  init(presenter: LoginPresenter) {
    presenter.displayForm(this.getForm());
  }

  async submitForm(presenter: LoginPresenter, form: LoginForm): Promise<void> {
    if (form.valid) {
      try {
        await this.authDataService.login(form.value).toPromise();
        await this.router.navigate(['/movie-database']);
      } catch (e) {
        presenter.displayLoginFailedNotification();
      }
    } else {
      form.markAllAsTouched();
      form.updateValueAndValidity();
    }
  }

  private getForm(): LoginForm {
    return this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    }) as LoginForm;
  }
}

export interface LoginPresenter {
  displayForm(form): void;

  displayLoginFailedNotification(): void;
}

export interface LoginForm extends FormGroup {
  controls: {
    login: AbstractControl;
    password: AbstractControl;
  };

  value: LoginWriteModel;
}
