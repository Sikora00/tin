import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';

export const authShellRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('@tin/auth/feature-login').then((m) => m.AuthFeatureLoginModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authShellRoutes)],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: {
        baseUrl: 'http://localhost:3333/api',
      },
    },
  ],
})
export class AuthShellModule {}
