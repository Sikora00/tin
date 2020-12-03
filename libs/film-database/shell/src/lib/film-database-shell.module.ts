import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilmDatabaseComponent } from './film-database/film-database.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FilmDatabaseComponent,
        children: [
          {
            path: 'film',
            loadChildren: () =>
              import('./film-routing.module').then((m) => m.FilmRoutingModule),
          },
          { path: '', pathMatch: 'full', redirectTo: 'film' },
        ],
      },
    ]),
  ],
  declarations: [FilmDatabaseComponent],
})
export class FilmDatabaseShellModule {}
