import { AfterViewInit, Component,Input } from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';


@Component({
    selector: 'multiple-xaxis-chart',
    template: `
      <div echarts [options]="options" class="echart"></div>
    `
  })
  export class MultipleXaxisChartComponent implements AfterViewInit {
  
    options: any = {};
      @Input() chartData: any = {
          title: null,
          data: [
              {
                  title: null,
                  data: [{ name: null, value: null }],
              }
          ]
      };
      @Input() newOptions: any = {}
  
      constructor(private utl: LibUtils = new LibUtils()) { }
      ngAfterViewInit() {
          this.options = {
              title: {
                  text: this.chartData.title,
                  right: 'center',
                  top: 'bottom'
              },
              tooltip: {
                  trigger: 'none',
                  axisPointer: {
                      type: 'none',
                  },
              },
              legend: {
                  data: [...this.chartData.datosEjeY.map(e => e.title)],
                  textStyle: {
                      // color: echarts.textColor,
                  },
              },
              grid: {
                  top: 70,
                  bottom: 50,
              },
              xAxis: [...this.chartData.datosEjeY.map((a) => {
                  return {
                      type: 'category',
                      axisTick: {
                          alignWithLabel: true,
                      },
                      axisLine: {
                          onZero: false,
                          lineStyle: {
                              // color: colors.info,
                          },
                      },
                      axisLabel: {
                          textStyle: {
                              // color: echarts.textColor,
                          },
                      },
                      axisPointer: {
                          label: {
                              formatter: params => {
                                  return (
                                      this.chartData.title + ' ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                                  );
                              },
                          },
                      },
                      data: this.chartData.datosEjeX,
                  }
              })],
              yAxis: [
                  {
                      type: 'value',
                      axisLine: {
                          lineStyle: {
                              // color: echarts.axisLineColor,
                          },
                      },
                      splitLine: {
                          lineStyle: {
                              // color: echarts.splitLineColor,
                          },
                      },
                      axisLabel: {
                          textStyle: {
                              // color: echarts.textColor,
                          },
                      },
                  },
              ],
              series: [
                  ...this.chartData.datosEjeY.map((a) => { return { name: a.title, type: 'line', smooth: true, data: a.data } })
              ],
          };
          this.options = this.utl.mergeObjects(this.options, this.newOptions);
          for (let i = 0; i < this.options.xAxis.length; i++) {
              this.options.xAxis[i].type = 'category';
          }
          for (let i = 0; i < this.options.yAxis.length; i++) {
              this.options.yAxis[i].type = 'value';
          }
          for (let i = 0; i < this.options.series.length; i++) {
              this.options.series[i].type = 'line';
          }
      }
 }
