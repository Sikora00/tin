import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDatabaseDomainModule } from '@tin/movie-database/domain';
import { ActorEditComponent } from './actor-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MovieDatabaseDomainModule,
    RouterModule.forChild([{ path: '', component: ActorEditComponent }]),
  ],
  declarations: [ActorEditComponent],
  exports: [ActorEditComponent],
})
export class MovieDatabaseFeatureActorEditModule {}
