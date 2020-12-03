import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@tin/film-database/feature-film-list').then(
        (m) => m.FilmDatabaseFeatureFilmListModule
      ),
  },
  {
    path: 'add',
    pathMatch: 'full',
    loadChildren: () =>
      import('@tin/film-database/feature-film-add').then(
        (m) => m.FilmDatabaseFeatureFilmAddModule
      ),
  },
  {
    path: ':id',
    pathMatch: 'full',
    loadChildren: () =>
      import('@tin/film-database/feature-film-preview').then(
        (m) => m.FilmDatabaseFeatureFilmPreviewModule
      ),
  },
  {
    path: ':id/edit',
    pathMatch: 'full',
    loadChildren: () =>
      import('@tin/film-database/feature-film-edit').then(
        (m) => m.FilmDatabaseFeatureFilmEditModule
      ),
  },
];

@NgModule({ imports: [RouterModule.forChild(routes)] })
export class FilmRoutingModule {}
