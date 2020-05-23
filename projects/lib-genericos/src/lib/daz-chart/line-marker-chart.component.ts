import { Component, OnChanges, Input } from '@angular/core';
import { graphic } from 'echarts';
import {LibUtils} from '../daz-general/libs/lib-utils'

@Component({
  selector: 'line-marker-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `
})
export class LineMarkerChartComponent implements OnChanges {

  options: any = {};
  @Input() chartData: any = {};
  @Input() newOptions: any = {};
  constructor(private utl: LibUtils = new LibUtils()) { }
  ngOnChanges() {
    if(this.chartData != undefined){
    /* Verificamos si los llega datos de entrada, y si no lo llenamos con datos por defecto */
    this.options = {
      color: ['#282828', 'yellow', 'blue'],
      backgroundColor: new graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#fffff'
      }]),
      title: {
        text: this.chartData.title,
        /*subtext: '纯属虚构' */
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: [...this.chartData.datosEjeY.map(e => e.title)],
      },
      toolbox: {
        show: false,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.chartData.datosEjeX
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value}'
        }
      },
      series: [
        ...this.chartData.datosEjeY.map((a) => { return { name: a.title, type: 'line', data: a.data,  markPoint: {
          data: [
            { type: 'max'},
            { type: 'min'}
          ]
        }, markLine: {
          data: [
            { type: 'average', name: 'Promedio'}
          ]
        }
      } })
    ]

    };
    this.options = this.utl.mergeObjects(this.options, this.newOptions);
    for (let i = 0; i < this.options.series.length; i++) {
     // this.options.series[i].data=this.chartData.datoy;
   
      this.options.series[i].type = 'line';
    }
  }
  }

}
