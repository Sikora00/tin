import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmDatabaseDomainModule } from '@tin/film-database/domain';
import { FilmAddComponent } from './film-add.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FilmDatabaseDomainModule,
    RouterModule.forChild([{ path: '', component: FilmAddComponent }]),
  ],
  declarations: [FilmAddComponent],
  exports: [FilmAddComponent],
})
export class FilmDatabaseFeatureFilmAddModule {}
