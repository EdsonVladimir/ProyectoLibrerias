import { Component, OnChanges, Input } from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';

@Component({
    selector: 'bar-tick-align',
    template: `<div echarts [options]="options" class="echart"></div>`,
})
export class BarTickAlignComponent implements OnChanges {
    public options: any = { };
    @Input() chartData: any = { };
    @Input() newOptions: any = { }

    constructor(private utl: LibUtils = new LibUtils()) { }
    ngOnChanges() {
        if (this.chartData != undefined) {
            this.options = {
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: [...this.chartData.dataXCategory.map(e => e)],
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: this.newOptions.colorxAxis,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: this.newOptions.colorxAxis,
                            },
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: this.newOptions.coloryAxis,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: this.newOptions.coloryAxis,
                            },
                        }
                    }
                ],
                series: [
                    {
                        name: this.newOptions.titleSeries,
                        type: 'bar',
                        barWidth: this.newOptions.WidthSerie,
                        data: [...this.chartData.dataSeries.map(e => e)]
                    }
                ]
            };
            this.options = this.utl.mergeObjects(this.options, this.newOptions);
        }
    }
}
