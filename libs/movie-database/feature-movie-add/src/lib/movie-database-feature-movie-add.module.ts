import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDatabaseDomainModule } from '@tin/movie-database/domain';
import { MovieAddComponent } from './movie-add.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MovieDatabaseDomainModule,
    RouterModule.forChild([{ path: '', component: MovieAddComponent }]),
  ],
  declarations: [MovieAddComponent],
  exports: [MovieAddComponent],
})
export class MovieDatabaseFeatureMovieAddModule {}
