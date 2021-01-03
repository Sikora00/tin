import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {SerialListComponent} from './serial-list/serial-list.component';
import {SerialCardComponent} from "./serial-card/serial-card.component";
import {SharedUiModule} from "@tin/shared/ui";

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{path: '', component: SerialListComponent}]), SharedUiModule],
  declarations: [SerialListComponent, SerialCardComponent],
})
export class MovieDatabaseClientFeatureSerialListModule {
}
