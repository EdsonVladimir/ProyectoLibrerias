import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LibGenericosComponent } from './lib-genericos.component';
import { DazChartModule} from './daz-chart/daz-chart.module';
import { DazGeneralModule} from './daz-general/daz-general.module';






@NgModule({
  declarations: [
    LibGenericosComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DazChartModule,
    DazGeneralModule
  ],
  exports: [
    LibGenericosComponent,
    DazChartModule,
    DazGeneralModule
  ]
})
export class LibGenericosModule { }
