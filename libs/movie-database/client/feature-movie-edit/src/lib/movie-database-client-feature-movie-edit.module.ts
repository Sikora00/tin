import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieEditComponent } from './movie-edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@tin/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MovieEditComponent }]),
    ReactiveFormsModule,
    SharedUiModule,
  ],
  declarations: [MovieEditComponent],
  exports: [MovieEditComponent],
})
export class MovieDatabaseClientFeatureMovieEditModule {}
