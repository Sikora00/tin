import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDatabaseDomainModule } from '@tin/movie-database/domain';
import { ActorAddComponent } from './actor-add.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MovieDatabaseDomainModule,
    RouterModule.forChild([{ path: '', component: ActorAddComponent }]),
  ],
  declarations: [ActorAddComponent],
  exports: [ActorAddComponent],
})
export class MovieDatabaseFeatureActorAddModule {}
