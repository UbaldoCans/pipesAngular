import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//modulo personalizado primeNG
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
// cambier el local de la app

import localEs from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common';



registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
    
    
  ],
  providers: [
    {provide: LOCALE_ID,useValue: 'es-MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
