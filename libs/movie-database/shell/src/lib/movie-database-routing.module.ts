import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieDatabaseComponent } from './movie-database/movie-database.component';

const routes: Route[] = [
  {
    path: '',
    component: MovieDatabaseComponent,
    children: [
      {
        path: 'movie',
        children: [
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
        ],
      },
      {
        path: 'actor',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@tin/movie-database/feature-actor-list').then(
                (m) => m.MovieDatabaseFeatureActorListModule
              ),
          },
          {
            path: 'add',
            pathMatch: 'full',
            loadChildren: () =>
              import('@tin/movie-database/feature-actor-add').then(
                (m) => m.MovieDatabaseFeatureActorAddModule
              ),
          },
          {
            path: ':id',
            pathMatch: 'full',
            loadChildren: () =>
              import('@tin/movie-database/feature-actor-preview').then(
                (m) => m.MovieDatabaseFeatureActorPreviewModule
              ),
          },
          {
            path: ':id/edit',
            pathMatch: 'full',
            loadChildren: () =>
              import('@tin/movie-database/feature-actor-edit').then(
                (m) => m.MovieDatabaseFeatureActorEditModule
              ),
          },
        ],
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'movie',
      },
    ],
  },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class MovieDatabaseRoutingModule {}
