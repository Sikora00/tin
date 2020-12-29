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
          path: 'movie-database',
          loadChildren: () =>
            import('@tin/movie-database/shell').then(
              (m) => m.MovieDatabaseShellModule
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
