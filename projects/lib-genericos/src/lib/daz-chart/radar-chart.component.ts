import { Component, AfterViewInit,ChangeDetectorRef, Input} from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';

@Component({
  selector: 'radar-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `
})
export class RadarChartComponent implements AfterViewInit {

  options: any = {};
  othersData: any = {
    title: 'Others',
    data: [],
  };
  @Input() chartData: any = { 
    title: null,
    data: [{name: null, value: null}],
  };
  @Input() newOptions: any = {}
  constructor(private cd: ChangeDetectorRef, private utl: LibUtils = new LibUtils()) {}
  
  ngAfterViewInit() {
    this.options = {
      title: {
          text: this.chartData.title
      },
      tooltip: {},
      legend: {
          data: [...this.chartData.data.map(e => e.name)]
      },
      radar: {
          name: {
              textStyle: {
                  color: '#fff',
                  backgroundColor: '#999',
                  borderRadius: 3,
                  padding: [3, 5]
             }
          },
          indicator: [
             ...this.chartData.indicator
          ]
      },
      series: [{
          name: this.chartData.title,
          type: 'radar',
          data : [
              ...this.chartData.data
          ]
      }]
    };
    this.options = this.utl.mergeObjects(this.options, this.newOptions);

    for (let i = 0; i < this.options.series.length; i++) {
      this.options.series[i].type = 'radar';
    }
    this.cd.detectChanges();// Evita el error de cambio de datos de la variable "results"
  }

}
