import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import {AuthHeaderInterceptor} from "../../../application/src/lib/infrastructure/auth-header.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

export const authShellRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('@tin/auth/client/feature-login').then(
        (m) => m.AuthClientFeatureLoginModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('@tin/auth/client/feature-register').then(
        (m) => m.AuthClientFeatureRegisterModule
      ),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authShellRoutes)],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true },
  ]
})
export class AuthClientShellModule {}
