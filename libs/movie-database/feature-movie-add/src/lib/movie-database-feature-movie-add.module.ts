import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieAddComponent } from './movie-add.component';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@tin/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MovieAddComponent }]),
    SharedUiModule,
    ReactiveFormsModule,
  ],
  declarations: [MovieAddComponent],
  exports: [MovieAddComponent],
})
export class MovieDatabaseFeatureMovieAddModule {}
