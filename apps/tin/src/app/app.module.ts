import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthShellModule } from '@tin/auth/shell';
import { RouterModule } from '@angular/router';
import { AppCoreModule } from './app-core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppCoreModule, AuthShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
