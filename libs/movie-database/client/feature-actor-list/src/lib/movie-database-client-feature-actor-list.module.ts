import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorListComponent } from './actor-list.component';
import { RouterModule } from '@angular/router';
import { ActorCardComponent } from './actor-card/actor-card.component';
import { SharedUiModule } from '@tin/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ActorListComponent }]),
    SharedUiModule,
  ],
  declarations: [ActorListComponent, ActorCardComponent],
  exports: [ActorListComponent],
})
export class MovieDatabaseClientFeatureActorListModule {}
