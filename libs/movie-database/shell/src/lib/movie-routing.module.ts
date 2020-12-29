import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@tin/movie-database/feature-movie-list').then(
        (m) => m.MovieDatabaseFeatureMovieListModule
      ),
  },
  {
    path: 'add',
    pathMatch: 'full',
    loadChildren: () =>
      import('@tin/movie-database/feature-movie-add').then(
        (m) => m.MovieDatabaseFeatureMovieAddModule
      ),
  },
  {
    path: ':id',
    pathMatch: 'full',
    loadChildren: () =>
      import('@tin/movie-database/feature-movie-preview').then(
        (m) => m.MovieDatabaseFeatureMoviePreviewModule
      ),
  },
  {
    path: ':id/edit',
    pathMatch: 'full',
    loadChildren: () =>
      import('@tin/movie-database/feature-movie-edit').then(
        (m) => m.MovieDatabaseFeatureMovieEditModule
      ),
  },
];

@NgModule({ imports: [RouterModule.forChild(routes)] })
export class MovieRoutingModule {}
