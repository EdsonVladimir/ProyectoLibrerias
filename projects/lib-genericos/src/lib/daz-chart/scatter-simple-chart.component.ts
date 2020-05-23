import { Component, OnInit, Input } from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';

@Component({
  selector: 'scatter-simple-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `
})
export class ScatterSimpleChartComponent implements OnInit {

  options: any = {};
  @Input() chartData: any ;
  @Input() newOptions: any = {};
  constructor(private utl: LibUtils = new LibUtils()) { }

  ngOnInit() {
    /* Verificamos si los llega datos de entrada, y si no lo llenamos con datos por defecto */
    this.options = {
      xAxis: {},
      yAxis: {},
      title: {
        left: 'center',
        text: 'Daza Software'
      },
     
      series: this.chartData
    };
    this.options = this.utl.mergeObjects(this.options, this.newOptions);
  }

}
