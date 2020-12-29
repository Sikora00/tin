import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieDatabaseComponent } from './movie-database/movie-database.component';
import { NavbarComponent } from './movie-database/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MovieDatabaseComponent,
        children: [
          {
            path: 'movie',
            loadChildren: () =>
              import('./movie-routing.module').then((m) => m.MovieRoutingModule),
          },
          { path: '', pathMatch: 'full', redirectTo: 'movie' },
        ],
      },
    ]),
  ],
  declarations: [MovieDatabaseComponent, NavbarComponent],
})
export class MovieDatabaseShellModule {}
