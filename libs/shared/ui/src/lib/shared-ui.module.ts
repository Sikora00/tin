import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AddButtonComponent,
    EditButtonComponent,
    ValidationErrorComponent,
  ],
  exports: [AddButtonComponent, EditButtonComponent, ValidationErrorComponent],
})
export class SharedUiModule {}
