import { OnChanges, Component, Input } from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';

@Component({
  selector: 'funel-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `
})
export class FunelChartComponent implements  OnChanges {

    options: any = {};
    @Input() chartData: any;
    @Input() newOptions: any = {}
    
    constructor(private utl: LibUtils = new LibUtils()) { }
    ngOnChanges() {
        if(this.chartData!= undefined){
        this.options = {
            title: {
                text: 'Dazasoftware',
                subtext: 'Nuevo'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                show: false,
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                }
            },
            legend: {
            },

            series: [
                {
                    name: 'Otro tituo de Series',
                    type: 'funnel',
                    left: '10%',
                    top: 60,
                    //x2: 80,
                    bottom: 60,
                    width: '80%',
                    // height: {totalHeight} - y - y2,
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'descending',
                    gap: 2,
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    labelLine: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    },
                    itemStyle: {
                        borderColor: '#282828',
                        borderWidth: 1
                    },
                    emphasis: {
                        label: {
                            fontSize: 20
                        }
                    },
                   // data :this.chartData.dataFunel
                }
            ]
        };
       
        this.options = this.utl.mergeObjects(this.options, this.newOptions);
        
        for (let i = 0; i < this.options.series.length; i++) {
            this.options.series[i].type = 'funnel';
            this.options.series[i].data = this.chartData;
          }
    }
    }

}
