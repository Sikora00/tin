import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import {TinMainLayoutComponent} from "../../../../libs/tin/client/main-feature/src/lib/tin-main-layout/tin-main-layout.component";

const routes: Routes = [
  {
    path: 'movie-database',
    component: TinMainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@tin/movie-database/client/shell').then((m) => m.MovieDatabaseClientShellModule),
      },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'movie-database' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
