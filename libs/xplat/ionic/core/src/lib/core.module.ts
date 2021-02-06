import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { throwIfAlreadyLoaded } from '@tin/xplat/utils';
import { TinCoreModule } from '@tin/xplat/web/core';

@NgModule({
  imports: [TinCoreModule, IonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
})
export class TinIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: TinIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'TinIonicCoreModule');
  }
}
