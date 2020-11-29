import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    RouterModule.forRoot([]),
    EffectsModule.forRoot(),
    StoreModule.forRoot({}),
    BrowserModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
})
export class AppCoreModule {}
