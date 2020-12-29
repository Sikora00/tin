import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDatabaseDomainModule } from '@tin/movie-database/domain';
import { MovieEditComponent } from './movie-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MovieDatabaseDomainModule,
    RouterModule.forChild([{ path: '', component: MovieEditComponent }]),
  ],
  declarations: [MovieEditComponent],
  exports: [MovieEditComponent],
})
export class MovieDatabaseFeatureMovieEditModule {}
