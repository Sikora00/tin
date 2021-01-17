import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  RegisterFacade,
  RegisterForm,
  RegisterPresenter,
} from '@tin/auth/client/application';
import { NotificationType, SnackbarService } from '@tin/shared/ui-snackbar';
import { first } from 'rxjs/operators';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, RegisterPresenter {
  form: RegisterForm;
  errors: string[];
  constructor(
    private registerFacade: RegisterFacade,
    private snackbarService: SnackbarService,
    private cdR: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.registerFacade.init(this);
  }

  displayForm(form): void {
    this.form = form;
  }

  onSubmit(): void {
    this.registerFacade.submitForm(this, this.form);
  }

  displayApiError(message: string): void {
    this.snackbarService.displayNotification(message, NotificationType.Error);
  }

  displayValidationErrors(messages: string[]): void {
    this.errors = messages;
    this.form.valueChanges.pipe(first()).subscribe(() => {
      this.errors = null;
      this.cdR.markForCheck();
    });
  }
}
