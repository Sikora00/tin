import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '@tin/xplat/utils';
import { ELECTRON_PROVIDERS, ElectronService } from './services';
import {TinCoreModule} from "@tin/xplat/web/core";

@NgModule({
  imports: [TinCoreModule],
  providers: [...ELECTRON_PROVIDERS],
})
export class TinElectronCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: TinElectronCoreModule,
    private _electronService: ElectronService
  ) {
    throwIfAlreadyLoaded(parentModule, 'TinElectronCoreModule');
  }
}
