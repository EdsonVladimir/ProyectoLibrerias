import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalErrorHandler } from './global-error-handler';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ]
})
export class DazGeneralModule { }
