import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorEditComponent } from './actor-edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@tin/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ActorEditComponent }]),
    ReactiveFormsModule,
    SharedUiModule,
  ],
  declarations: [ActorEditComponent],
  exports: [ActorEditComponent],
})
export class MovieDatabaseFeatureActorEditModule {}
