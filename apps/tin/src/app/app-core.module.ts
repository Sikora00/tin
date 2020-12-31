import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

@NgModule({
  imports: [AkitaNgDevtools.forRoot(), BrowserModule, HttpClientModule],
})
export class AppCoreModule {}
