import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

export const authShellRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('@tin/auth/feature-login').then((m) => m.AuthFeatureLoginModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authShellRoutes)],
})
export class AuthShellModule {}
