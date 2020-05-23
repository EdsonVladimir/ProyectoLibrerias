import { Component, Input, OnChanges } from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';

@Component({
  selector: 'head-map-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `
})
export class HeadMapChartComponent implements OnChanges {

  options: any = {};
 
  @Input() chartData: any = {};

  @Input() newOptions: any = {}

  constructor(private utl: LibUtils = new LibUtils()) {
  }
  ngOnChanges() {
    this.options = {
     
      title: {
        top: 30,
        left: 'center',
        text: '2016年某人每天的步数'
    },
    tooltip: {},
    visualMap: {
        min: 0,
        max: 10000,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65,
        textStyle: {
            color: '#000'
        }
    },
    calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2016',
        itemStyle: {
            borderWidth: 0.5
        },
        yearLabel: {show: false}
    },
      series:
        {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: this.chartData
        }
    
  };

    this.options = this.utl.mergeObjects(this.options, this.newOptions);
    //console.log(this.charData);
   
      this.options.series.type = 'heatmap';
//      console.log(this.options);
      
    
  }

}
