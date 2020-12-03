import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmDatabaseDomainModule } from '@tin/film-database/domain';
import { FilmEditComponent } from './film-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FilmDatabaseDomainModule,
    RouterModule.forChild([{ path: '', component: FilmEditComponent }]),
  ],
  declarations: [FilmEditComponent],
  exports: [FilmEditComponent],
})
export class FilmDatabaseFeatureFilmEditModule {}
