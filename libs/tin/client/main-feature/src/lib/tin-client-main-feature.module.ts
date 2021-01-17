import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TinMainLayoutComponent } from './tin-main-layout/tin-main-layout.component';
import { TinMainNavbarComponent } from './tin-main-navbar/tin-main-navbar.component';
import { RouterModule } from '@angular/router';
import { AuthClientFeatureNavbarModule } from '@tin/auth/client/feature-navbar';
import { MovieDatabaseClientFeatureNavbarModule } from '@tin/movie-database/client/feature-navbar';

@NgModule({
  imports: [
    CommonModule,
    AuthClientFeatureNavbarModule,
    MovieDatabaseClientFeatureNavbarModule,
    RouterModule,
  ],
  declarations: [TinMainLayoutComponent, TinMainNavbarComponent],
  exports: [TinMainLayoutComponent],
})
export class TinClientMainFeatureModule {}
