import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmDatabaseDomainModule } from '@tin/film-database/domain';
import { FilmPreviewComponent } from './film-preview.component';
import { RouterModule } from '@angular/router';
import { FilmDatabaseUiComponentsModule } from '@tin/film-database/ui-components';
import { SharedUiModule } from '@tin/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    FilmDatabaseDomainModule,
    FilmDatabaseUiComponentsModule,
    RouterModule.forChild([{ path: '', component: FilmPreviewComponent }]),
  ],
  declarations: [FilmPreviewComponent],
  exports: [FilmPreviewComponent],
})
export class FilmDatabaseFeatureFilmPreviewModule {}
