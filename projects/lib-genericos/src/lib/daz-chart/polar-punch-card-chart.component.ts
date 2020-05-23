import { Component, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';

@Component({
    selector: 'polar-punch-card-chart',
    template: `
      <div echarts [options]="options" class="echart"></div>
    `
  })
  export class PolarPunchCardChartComponent implements OnInit {
  
      public options: any = {};
      @Input() chartData: any = {
          title: null,
          angleAxis: [],
          radiusAxis: [],
          data: [],
      };
      @Input() newOptions: any = {}
  
      constructor(private cd: ChangeDetectorRef, private utl: LibUtils = new LibUtils()) { }
      ngOnInit(): void {
          this.options = {
              title: {
                  text: this.chartData.title,
                  textStyle: {
                      color: '#FA05F3'
                  }
              },
              legend: {
                  data: this.chartData.title,
                  left: 'right'
              },
              polar: {},
              tooltip: {
              },
              angleAxis: {
                  type: 'category',
                  data: this.chartData.angleAxis,
                  boundaryGap: false,
                  splitLine: {
                      show: true,
                      lineStyle: {
                          color: this.newOptions.colorLine,
                          type: 'dashed'
                      }
                  },
                  axisLine: {
                      show: false,
                      lineStyle: {
                          color: this.newOptions.colorData
                      }
                  }
              },
              radiusAxis: {
                  type: 'category',
                  data: this.chartData.radiusAxis,
                  axisLine: {
                      show: false
                  },
                  axisLabel: {
                      rotate: 45,
                      color: this.newOptions.colorDataText
                  }
              },
              series: [{
                  color: this.newOptions.colorSeries,
                  name: 'Punch Card',
                  type: 'scatter',
                  coordinateSystem: 'polar',
                  symbolSize: function(val) {
                      return val[2] * 2;
                  },
                  data: this.chartData.data,
                  animationDelay: function(idx) {
                      return idx * 5;
                  }
              }]
          };
          this.options = this.utl.mergeObjects(this.options, this.newOptions);
          this.cd.detectChanges();// Evita el error de cambio de datos de la variable "results"
      }
  
  }
  
  
  