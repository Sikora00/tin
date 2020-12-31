import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePreviewComponent } from './movie-preview.component';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@tin/shared/ui';
import { CastMemberComponent } from './cast-member/cast-member.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: MoviePreviewComponent }]),
  ],
  declarations: [MoviePreviewComponent, CastMemberComponent],
  exports: [MoviePreviewComponent],
})
export class MovieDatabaseFeatureMoviePreviewModule {}
