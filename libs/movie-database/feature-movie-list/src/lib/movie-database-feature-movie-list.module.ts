import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDatabaseDomainModule } from '@tin/movie-database/domain';
import { MovieListComponent } from './movie-list.component';
import { RouterModule } from '@angular/router';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SharedUiModule } from '@tin/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    MovieDatabaseDomainModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: MovieListComponent }]),
  ],
  declarations: [MovieListComponent, MovieCardComponent],
})
export class MovieDatabaseFeatureMovieListModule {}
