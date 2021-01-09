import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SerialAddEditComponent } from './serial-add-edit/serial-add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@tin/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SerialAddEditComponent }]),
    ReactiveFormsModule,
    SharedUiModule,
  ],
  declarations: [SerialAddEditComponent],
})
export class MovieDatabaseClientSerialFeatureAddEditModule {}
