import { Component, OnInit, Input} from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';

@Component({
  selector: 'mix-line-bar-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `
})
export class MixLineBarChartComponent implements OnInit {

  options: any = {};
    @Input() chartData: any = {
        datosX: [],
        series: [{
            name: null,
            type: null,
            data: []
        }],
    };
    @Input() newOptions: any = {}
    constructor(private utl: LibUtils = new LibUtils()) { }
    ngOnInit() {
        this.options = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: { show: false, readOnly: false },
                    magicType: { show: false, type: ['line', 'bar'] },
                    restore: { show: false },
                    saveAsImage: { show: false }
                }
            },
            legend: {
                data: [
                    ...this.chartData.series.map((a) => {
                        return {
                            name: a.name,
                        }
                    })
                ]
            },
            xAxis: [
                {
                    type: 'category',
                    data: this.chartData.datosX,
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'ML',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value}' + 'ml'
                    }
                },
                {
                    type: 'value',
                    name: '°C',
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value}' + '°C'
                    }
                }
            ],
            series: this.chartData.series
        };
        this.options = this.utl.mergeObjects(this.options, this.newOptions);
        for (let i = 0; i < this.options.xAxis.length; i++) {
            this.options.xAxis[i].type = 'category';
        }
    }


}
