import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';
import { graphic } from 'echarts';

@Component({
  selector: 'bubble-gradient-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `
})
export class BubbleGradientChartComponent implements OnInit {

    options: any = {};
    @Input() chartData: any = {
        data: [],
    };
    @Input() newOptions: any = {}

    constructor(private utl: LibUtils = new LibUtils()) { }
    ngOnInit() {
        this.options = {
            title: {
                text: this.chartData.title??'Daza Sofware'
            },
            legend: {
                right: 10,
                data: this.chartData.data.map( v => v[0][4] )
            },
            xAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                scale: true
            },
            series: this.chartData.data.map(v => {
                return {
                    name: v[0][4],
                    data: v,
                    type: 'scatter',
                    symbolSize: (data) => {
                        return Math.sqrt(data[2]) / 5e2;//dividido por variables
                    },
                    emphasis: {
                        label: {
                            show: true,
                            formatter: (param) => {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                }
            })
        };
        this.options = this.utl.mergeObjects(this.options, this.newOptions);

        for (let i = 0; i < this.options.series.length; i++) {
            this.options.series[i].type = 'scatter';
        }
    }

}
