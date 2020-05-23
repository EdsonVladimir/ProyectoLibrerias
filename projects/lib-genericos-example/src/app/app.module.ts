import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LibGenericosModule} from 'lib-genericos';


import { AppComponent } from './app.component';
import { PruebaComponent } from './components/prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    LibGenericosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
