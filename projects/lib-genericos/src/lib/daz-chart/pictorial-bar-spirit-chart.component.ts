import { Component, OnInit, Input} from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';

@Component({
  selector: 'pictorial-bar-spirit-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `
})
export class PictorialBarSpiritChartComponent implements OnInit {
  options: any = {};
  @Input() chartData: any = {};
  @Input() newOptions: any = {};
  constructor(private utl: LibUtils = new LibUtils()) { }
  ngOnInit() {
    /* Verificamos si los llega datos de entrada, y si no lo llenamos con datos por defecto */
  
    this.options = {
      xAxis: {
        max: '2000',
        splitLine: { show: false },
        offset: 10,
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          margin: 10
        }
      },
      yAxis: {
        data: ['2013', '2014', '2015', '2016'],
        inverse: true,
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          margin: 10,
          color: '#999',
          fontSize: 16
        }
      },
      series: this.chartData
    };
    this.options = this.utl.mergeObjects(this.options, this.newOptions);
  }

}
