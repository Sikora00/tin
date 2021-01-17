import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthNavbarComponent } from './auth-navbar/auth-navbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthNavbarComponent],
  exports: [AuthNavbarComponent],
})
export class AuthClientFeatureNavbarModule {}
