import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDatabaseNavbarComponent } from './movie-database-navbar/movie-database-navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MovieDatabaseNavbarComponent],
  exports: [MovieDatabaseNavbarComponent],
})
export class MovieDatabaseClientFeatureNavbarModule {}
