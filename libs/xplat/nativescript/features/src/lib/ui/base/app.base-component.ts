import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@tin/xplat/core';
import { AppService } from '@tin/xplat/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
