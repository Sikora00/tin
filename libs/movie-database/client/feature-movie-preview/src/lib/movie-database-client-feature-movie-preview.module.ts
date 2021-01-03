import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePreviewComponent } from './movie-preview.component';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@tin/shared/ui';
import {MovieDatabaseClientUiModule} from "@tin/movie-database/client/ui";

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    MovieDatabaseClientUiModule,
    RouterModule.forChild([{ path: '', component: MoviePreviewComponent }]),
  ],
  declarations: [MoviePreviewComponent],
  exports: [MoviePreviewComponent],
})
export class MovieDatabaseClientFeatureMoviePreviewModule {}
