import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmDatabaseDomainModule } from '@tin/film-database/domain';
import { FilmListComponent } from './film-list.component';
import { RouterModule } from '@angular/router';
import { FilmCardComponent } from './film-card/film-card.component';
import { SharedUiModule } from '@tin/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    FilmDatabaseDomainModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: FilmListComponent }]),
  ],
  declarations: [FilmListComponent, FilmCardComponent],
})
export class FilmDatabaseFeatureFilmListModule {}
