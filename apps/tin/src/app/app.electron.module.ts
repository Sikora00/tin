import { NgModule } from '@angular/core';
import { TinElectronCoreModule } from '@tin/xplat/electron/core';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, TinElectronCoreModule],
  bootstrap: [AppComponent],
})
export class AppElectronModule {}
