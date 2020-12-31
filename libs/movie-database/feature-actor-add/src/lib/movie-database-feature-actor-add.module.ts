import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorAddComponent } from './actor-add.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@tin/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ActorAddComponent }]),
    ReactiveFormsModule,
    SharedUiModule,
  ],
  declarations: [ActorAddComponent],
  exports: [ActorAddComponent],
})
export class MovieDatabaseFeatureActorAddModule {}
