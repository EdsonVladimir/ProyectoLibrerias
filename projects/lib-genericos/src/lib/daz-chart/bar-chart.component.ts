import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';

@Component({
  selector: 'bar-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class BarChartComponent implements OnInit {

  options: any = {};
  othersData: any = {
    title: 'Others',
    data: [],
  };
  @Input() chartData: any = { 
    title: null,
    data: [{name:null, value:null}],
  };
  @Input() newOptions: any = {}

  @Input() othersVal: any;

  constructor(private utl: LibUtils = new LibUtils()) { }

  ngOnInit() {
    if (this.othersVal) {
      for (let i = 0; i < this.chartData.data.length; i++) {
        if(this.chartData.data[i].value<=this.othersVal){
          this.othersData.data.push(this.chartData.data.splice(i,1)[0]);
        }     
      }
    }
    
    this.options = {
      title: {
        text: this.chartData.title,
        right: 'center',
        top: 'bottom'
      },
      legend: {
        data: [...this.chartData.data.map(e => e.name), this.othersVal?this.othersData.title:null],
        align: 'left'
      },
      tooltip: {},
      xAxis: {
        data: [...this.chartData.data.map(e => e.name), this.othersVal?this.othersData.title:null],
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
      },
      series: {
        name: this.chartData.title,
        type: 'bar',
        data: [...this.chartData.data, 
          this.othersVal?
          { name: this.othersData.title, value: this.othersData.data.reduce((a, c) => { return a+=c.value},0), 
            tooltip: { trigger: 'item', formatter: '{a}<br/>{b} Total : {c} <br/>'+(this.othersData.data.map(e => e.name+': '+e.value+'</br>')).toString().replace(',', ' ') }
          }:
          null
        ],
      }
    };
    this.options = this.utl.mergeObjects(this.options, this.newOptions);
    
    this.options.series.type = 'bar';
  }


}
