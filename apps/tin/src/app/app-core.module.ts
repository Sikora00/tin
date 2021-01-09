import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

registerLocaleData(localePl);
@NgModule({
  imports: [AkitaNgDevtools.forRoot(), BrowserModule, HttpClientModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pl-PL' }],
})
export class AppCoreModule {}
