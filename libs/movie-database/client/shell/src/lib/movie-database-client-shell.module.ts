import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDatabaseComponent } from './movie-database/movie-database.component';
import { NavbarComponent } from './movie-database/navbar/navbar.component';
import { MovieDatabaseRoutingModule } from './movie-database-routing.module';

@NgModule({
  imports: [CommonModule, MovieDatabaseRoutingModule],
  declarations: [MovieDatabaseComponent, NavbarComponent],
})
export class MovieDatabaseClientShellModule {}
