import { OnChanges, Component, Input } from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';

@Component({
  selector: 'bar-animation-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class BarAnimationChartComponent implements OnChanges {

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
    
    ngOnChanges() {
        this.options = {
            //backgroundColor: '#FF0F00',
            color: ['#FF0F00', '#FFC100', '#2300FF'],//DCA implementar parametrización
            title: {
                text: this.chartData.title,
                right: 'center',
                top: 'top'
            },
            legend: {
                data: [...this.chartData.data.map(e => e.title)],
                align: 'left',
                left: 'left',
                textStyle: {
                    //color: echarts.textColor,
                },
            },
            xAxis: [
                {
                    data: this.chartData.xAxisData.com,
                    silent: false,
                    axisTick: {
                        alignWithLabel: true,
                    },
                    axisLine: {
                        lineStyle: {
                            //color: echarts.axisLineColor,
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            //color: echarts.textColor,
                        },
                    },
                },
            ],
            yAxis: [
                {
                    axisLine: {
                        lineStyle: {
                            //color: echarts.axisLineColor,
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            //color: echarts.splitLineColor,
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            //color: echarts.textColor,
                        },
                    },
                },
            ],
            series: [
                ...this.chartData.data.map((a) => {
                    return {
                        name: a.title,
                        type: 'bar',
                        data: a.data,
                        //animationDelay: idx => idx * 10 + a.time,    
                    }
                })
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: idx => idx * 100,
        };
        this.options = this.utl.mergeObjects(this.options, this.newOptions);
    }

}
