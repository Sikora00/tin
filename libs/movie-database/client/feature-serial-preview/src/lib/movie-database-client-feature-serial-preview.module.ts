import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {SerialPreviewComponent} from "./serial-preview.component";
import {MovieDatabaseClientUiModule} from "@tin/movie-database/client/ui";
import {SharedUiModule} from "@tin/shared/ui";


@NgModule({
  imports: [CommonModule, RouterModule.forChild([{path: '', component: SerialPreviewComponent}]), MovieDatabaseClientUiModule, SharedUiModule],
  declarations: [SerialPreviewComponent]
})
export class MovieDatabaseClientFeatureSerialPreviewModule {
}
