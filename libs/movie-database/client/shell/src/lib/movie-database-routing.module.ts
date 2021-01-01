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
              import('@tin/movie-database/client/feature-movie-list').then(
                (m) => m.MovieDatabaseClientFeatureMovieListModule
              ),
          },
          {
            path: 'add',
            pathMatch: 'full',
            loadChildren: () =>
              import('@tin/movie-database/client/feature-movie-add').then(
                (m) => m.MovieDatabaseClientFeatureMovieAddModule
              ),
          },
          {
            path: ':id',
            pathMatch: 'full',
            loadChildren: () =>
              import('@tin/movie-database/client/feature-movie-preview').then(
                (m) => m.MovieDatabaseClientFeatureMoviePreviewModule
              ),
          },
          {
            path: ':id/edit',
            pathMatch: 'full',
            loadChildren: () =>
              import('@tin/movie-database/client/feature-movie-edit').then(
                (m) => m.MovieDatabaseClientFeatureMovieEditModule
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
              import('@tin/movie-database/client/feature-actor-list').then(
                (m) => m.MovieDatabaseClientFeatureActorListModule
              ),
          },
          {
            path: 'add',
            pathMatch: 'full',
            loadChildren: () =>
              import('@tin/movie-database/client/feature-actor-add').then(
                (m) => m.MovieDatabaseClientFeatureActorAddModule
              ),
          },
          {
            path: ':id',
            pathMatch: 'full',
            loadChildren: () =>
              import('@tin/movie-database/client/feature-actor-preview').then(
                (m) => m.MovieDatabaseClientFeatureActorPreviewModule
              ),
          },
          {
            path: ':id/edit',
            pathMatch: 'full',
            loadChildren: () =>
              import('@tin/movie-database/client/feature-actor-edit').then(
                (m) => m.MovieDatabaseClientFeatureActorEditModule
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
