import {Component, Input, OnChanges } from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';

@Component({
  selector: 'gauge-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `
})
export class GaugeChartComponent implements OnChanges {

  options: any = {};

  @Input() chartData: any ;
  @Input() newOptions: any = {};

  constructor(private utl: LibUtils = new LibUtils()) {}
   
  ngOnChanges() {
    this.options = {
      tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
      },      
      toolbox: {
          show: false,
          feature: {
            restore: {},
            saveAsImage: {}
          }
      },
      series:  [{
        name: 'Daza Software',
        type: 'gauge',
        detail: {formatter: '{value}%'},
        data: this.chartData
      }
      ]
    }

    this.options = this.utl.mergeObjects(this.options, this.newOptions);
    for (let i = 0; i < this.options.series.length; i++) {
      this.options.series[i].type = 'gauge';
    }
    }


}
