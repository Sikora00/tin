import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthClientShellModule } from '@tin/auth/client/shell';
import { RouterModule } from '@angular/router';
import { AppCoreModule } from './app-core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TinClientMainFeatureModule } from '@tin/tin/client/main-feature';
import { TinMainLayoutComponent } from '../../../../libs/tin/client/main-feature/src/lib/tin-main-layout/tin-main-layout.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { SharedUiSnackbarModule } from '@tin/shared/ui-snackbar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppCoreModule,
    AuthClientShellModule,
    TinClientMainFeatureModule,
    SharedUiSnackbarModule,
    RouterModule.forRoot([
      {
        path: 'movie-database',
        component: TinMainLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@tin/movie-database/client/shell').then(
                (m) => m.MovieDatabaseClientShellModule
              ),
          },
        ],
      },
      { path: '', pathMatch: 'full', redirectTo: 'movie-database' },
    ]),
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: {
        baseUrl: 'http://localhost:3333/api',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
