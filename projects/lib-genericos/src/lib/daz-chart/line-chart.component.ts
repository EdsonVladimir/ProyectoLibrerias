import { AfterViewInit, Component, Input } from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';

@Component({
  selector: 'line-chart',
  template: `
    <div echarts [options]="options" class="echart" ></div>
  `
})
export class LineChartComponent implements AfterViewInit {

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
            color: ['#FF0F00', '#FFC100', '#2300FF'],
            title: {
                text: this.chartData.title,
                right: 'center',
                top: 'top'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/> {b} : {c}',
            },
            legend: {
                left: 'left',
                data: [...this.chartData.data.map(e => e.title)],
            },
            yAxis: {
                //type: 'log'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: [
                {
                    type: 'category',
                    data: this.chartData.xAxisData.com,
                    axisTick: {
                        alignWithLabel: true,
                    },
                },
            ],
            series: [
                ...this.chartData.data.map((a) => {
                    return {
                        name: a.title,
                        type: 'line',
                        data: a.data,
                    }
                })
            ],
        };
        this.options = this.utl.mergeObjects(this.options, this.newOptions);

        for (let i = 0; i < this.options.series.length; i++) {
            this.options.series[i].type = 'line';
        }
        for (let i = 0; i < this.options.xAxis.length; i++) {
            this.options.xAxis[i].type = 'category';
        }
    }

}
