import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthDataService } from '../infrastructure/auth-data.service';

@Injectable({ providedIn: 'root' })
export class RegisterFacade {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authDataService: AuthDataService
  ) {}

  init(presenter: RegisterPresenter) {
    presenter.displayForm(this.getForm());
  }

  async submitForm(
    presenter: RegisterPresenter,
    form: RegisterForm
  ): Promise<void> {
    if (form.valid) {
      try {
        await this.authDataService.register(form.value).toPromise();
        await this.router.navigate(['/login']);
      } catch (e) {
        e = e.error;
        if (Array.isArray(e.message)) {
          presenter.displayValidationErrors(e.message);
        } else {
          presenter.displayApiError(e.message);
        }
      }
    } else {
      form.markAllAsTouched();
      form.updateValueAndValidity();
    }
  }

  private getForm(): RegisterForm {
    return this.fb.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    }) as RegisterForm;
  }
}

export interface RegisterPresenter {
  displayForm(form): void;

  displayApiError(message: string): void;

  displayValidationErrors(messages: string[]): void;
}

export interface RegisterForm extends FormGroup {
  controls: {
    login: AbstractControl;
    password: AbstractControl;
  };

  value: {
    login: string;
    password: string;
  };
}
