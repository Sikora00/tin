import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthShellModule } from '@tin/auth/shell';
import { RouterModule } from '@angular/router';
import { AppCoreModule } from './app-core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppCoreModule,
    AuthShellModule,
    RouterModule.forRoot(
      [
        {
          path: 'film-database',
          loadChildren: () =>
            import('@tin/film-database/shell').then(
              (m) => m.FilmDatabaseShellModule
            ),
        },
        { path: '', pathMatch: 'full', redirectTo: 'login' },
      ],
      { enableTracing: true }
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
