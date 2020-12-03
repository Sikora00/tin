import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AddButtonComponent, EditButtonComponent],
  exports: [AddButtonComponent, EditButtonComponent],
})
export class SharedUiModule {}
