import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDatabaseDomainModule } from '@tin/movie-database/domain';
import { MoviePreviewComponent } from './movie-preview.component';
import { RouterModule } from '@angular/router';
import { MovieDatabaseUiComponentsModule } from '@tin/movie-database/ui-components';
import { SharedUiModule } from '@tin/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    MovieDatabaseDomainModule,
    MovieDatabaseUiComponentsModule,
    RouterModule.forChild([{ path: '', component: MoviePreviewComponent }]),
  ],
  declarations: [MoviePreviewComponent],
  exports: [MoviePreviewComponent],
})
export class MovieDatabaseFeatureMoviePreviewModule {}
