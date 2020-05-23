import { OnChanges, Component, ChangeDetectorRef, Input } from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';

@Component({
  selector: 'candlestick-chart',
  template: `
    <div class="center">
        <div echarts [options]="options" class="echart"></div>
    </div>
    
  `
})
export class CandlestickChartComponent implements OnChanges {

    options: any = {};

    @Input() chartData: any={};

    @Input() newOptions: any = {}


    markerLineOption:any;
    merkerPointOption:any;
    constructor(private cd: ChangeDetectorRef, private utl: LibUtils = new LibUtils()) {

    }

    calculateMA(dayCount) {//movile average calculation
        var result = [];
        for (var i = 0; i < this.chartData.length; i++) {
            if (i < dayCount) {
                result.push('-');
                continue;
            }
            var sum = 0;
            for (var j = 0; j < dayCount; j++) {
                sum += this.chartData.data[i - j][this.chartData.close_candlestick];
            }
            result.push(sum / dayCount);
        }
        return result;
    }
    ngOnChanges() {
        if(this.chartData != undefined){
       // try {
           
            this.options = {
                title: {
                    text: "Daza  Software",
                    left: 0
                },
                tooltip: {
                    trigger: 'item',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                // legend: {
                //     data: [this.title, 'hola']
                // },
                grid: {
                    left: '10%',
                    right: '10%',
                    bottom: '15%'
                },
                xAxis: {
                    type: 'category',
                    data: this.chartData.datosEjeX
                    // scale: true,
                    // boundaryGap: false,
                    // axisLine: {onZero: false},
                    // splitLine: {show: false},
                    // splitNumber: 20,
                    // min: 'dataMin',
                    // max: 'dataMax'
                },
                yAxis: {
                    scale: true,
                    splitArea: {
                        show: true
                    }
                },
                dataZoom: [
                    {
                        type: 'inside',
                        start: 50,
                        end: 100
                    },
                    {
                        show: true,
                        type: 'slider',
                        top: '90%',
                        start: 50,
                        end: 100
                    }
                ],
                series:[
                    {   
                        name: 'Daza Software',
                        type: 'candlestick'
                    }
                ]
            };

           if (this.chartData.markPointOp) {
               this.merkerPointOption = {
                    label: {
                        normal: {
                            formatter: function(param) {
                                return param != null ? Math.round(param.value) : '';
                            }
                        }
                    },
                    data: [
                        ...this.chartData.markPointOp.map(m => {
                            return {
                                name: 'Markpoint entrado por el ususario',
                                coord: m,
                                value: m[1],
                                itemStyle: {
                                    color: 'rgb(41,60,85)'
                                },
                                tooltip: {
                                    trigger: 'item'
                                }
                            }
                        }),
                        {
                            name: 'highest value',
                            type: 'max',
                            valueDim: 'highest'
                        },
                        {
                            name: 'lowest value',
                            type: 'min',
                            valueDim: 'lowest'
                        },
                        {
                            name: 'average value on close',
                            type: 'average',
                            valueDim: 'close'
                        }
                    ],
                }
                this.options.series[0].markPoint= this.merkerPointOption;
            }
            if (this.chartData.markLineOP ) {
                this.markerLineOption = {
                    symbol: ['none', 'none'],
                    data: [
                        [
                            {
                                name: 'from lowest to highest',
                                type: 'min',
                                valueDim: 'lowest',
                                symbol: 'circle',
                                symbolSize: 10,
                                label: {
                                    show: false
                                },
                                emphasis: {
                                    label: {
                                        show: false
                                    }
                                }
                            },
                            {
                                type: 'max',
                                valueDim: 'highest',
                                symbol: 'circle',
                                symbolSize: 10,
                                label: {
                                    show: false
                                },
                                emphasis: {
                                    label: {
                                        show: false
                                    }
                                }
                            }
                        ],
                        {
                            name: 'min line on close',
                            type: 'min',
                            valueDim: 'close'
                        },
                        {
                            name: 'max line on close',
                            type: 'max',
                            valueDim: 'close'
                        }
                    ]
                }
                this.options.series[0].markLine= this.markerLineOption;
                
            }
            if (this.chartData.MA_candlestick) {
                this.chartData.MA_candlestick.forEach(e => {
                    this.options.series.push(
                        {
                            name: `MA${e}`,
                            type: 'line',
                            data: this.calculateMA(e),
                            smooth: true,
                            lineStyle: {
                                opacity: 0.5
                            }
                        }
                    );
                });

            } 
        this.options = this.utl.mergeObjects(this.options, this.newOptions);
        for (let i = 0; i < this.options.series.length; i++) {
            this.options.series[i].data = this.chartData.datosEjeY
            this.options.series[i].type = 'candlestick';
            
          }
    }
    }

}
