import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorPreviewComponent } from './actor-preview.component';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@tin/shared/ui';
import { ActorMovieComponent } from './actor-movie/actor-movie.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ActorPreviewComponent }]),
    SharedUiModule,
  ],
  declarations: [ActorPreviewComponent, ActorMovieComponent],
  exports: [ActorPreviewComponent],
})
export class MovieDatabaseFeatureActorPreviewModule {}
