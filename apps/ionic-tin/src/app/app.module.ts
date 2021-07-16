import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppCoreModule} from "../../../tin/src/app/app-core.module";
import {AuthClientShellModule} from "@tin/auth/client/shell";
import {TinClientMainFeatureModule} from "@tin/tin/client/main-feature";
import {SharedUiSnackbarModule} from "@tin/shared/ui-snackbar";
import {ReactiveFormsModule} from "@angular/forms";
import {NG_ENTITY_SERVICE_CONFIG} from "@datorama/akita-ng-entity-service";

@NgModule({
  imports: [CoreModule, SharedModule, AppRoutingModule,     AppCoreModule,
    AuthClientShellModule,
    TinClientMainFeatureModule,
    SharedUiSnackbarModule,     ReactiveFormsModule,
  ],
  providers: [    {
    provide: NG_ENTITY_SERVICE_CONFIG,
    useValue: {
      baseUrl: 'http://localhost:3333/api',
    },
  }],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
