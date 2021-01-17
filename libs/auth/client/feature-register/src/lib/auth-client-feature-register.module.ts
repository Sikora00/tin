import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { AuthClientUiModule } from '@tin/auth/client/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@tin/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    AuthClientUiModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: RegisterComponent }]),
    ReactiveFormsModule,
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
})
export class AuthClientFeatureRegisterModule {}
