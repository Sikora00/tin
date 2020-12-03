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
          path: 'debt',
          loadChildren: () =>
            import('@tin/debt/shell').then((m) => m.DebtShellModule),
        },
        {path: '', pathMatch: 'full', redirectTo: 'login'}
      ],
      { enableTracing: true }
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
