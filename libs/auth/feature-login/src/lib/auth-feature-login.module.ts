import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthDomainModule } from '@tin/auth/domain';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AuthDomainModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class AuthFeatureLoginModule {}
