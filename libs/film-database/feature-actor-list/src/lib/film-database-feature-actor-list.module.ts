import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmDatabaseDomainModule } from '@tin/film-database/domain';
import { ActorListComponent } from './actor-list.component';

@NgModule({
  imports: [CommonModule, FilmDatabaseDomainModule],
  declarations: [ActorListComponent],
  exports: [ActorListComponent],
})
export class FilmDatabaseFeatureActorListModule {}
