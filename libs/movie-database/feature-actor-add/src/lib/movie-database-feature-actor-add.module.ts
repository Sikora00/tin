import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDatabaseDomainModule } from '@tin/movie-database/domain';
import { ActorAddComponent } from './actor-add.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@tin/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    MovieDatabaseDomainModule,
    RouterModule.forChild([{ path: '', component: ActorAddComponent }]),
    ReactiveFormsModule,
    SharedUiModule,
  ],
  declarations: [ActorAddComponent],
  exports: [ActorAddComponent],
})
export class MovieDatabaseFeatureActorAddModule {}
