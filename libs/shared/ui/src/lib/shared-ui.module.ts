import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AddButtonComponent,
    EditButtonComponent,
    ValidationErrorComponent,
    LoadingComponent,
  ],
  exports: [
    AddButtonComponent,
    EditButtonComponent,
    ValidationErrorComponent,
    LoadingComponent,
  ],
})
export class SharedUiModule {}
