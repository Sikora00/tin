import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDatabaseDomainModule } from '@tin/movie-database/domain';
import { ActorListComponent } from './actor-list.component';

@NgModule({
  imports: [CommonModule, MovieDatabaseDomainModule],
  declarations: [ActorListComponent],
  exports: [ActorListComponent],
})
export class MovieDatabaseFeatureActorListModule {}
