import { Component, Input, OnChanges  } from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';

@Component({
  selector: 'sunburst-visual-map-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `
})
export class SunburstVisualMapChartComponent implements OnChanges {

  options: any = {};
  @Input() chartData: any = { 
    title: null,
    data: [{name:null, value:null}],
  };
  @Input() newOptions: any = {}

  constructor(private utl: LibUtils = new LibUtils()) { }

  ngOnChanges() {

      console.log(this.newOptions);
      
    this.options = {
        visualMap: {
            type: 'continuous',
            min: 0,
            max: 10,
            inRange: {
                color: ['#a5446f','#dd4c51','#f2684b','#e73451','#e65656'] // validar DCA
            }
        },
        series: {
            type: 'sunburst',
            data: this.chartData,
            radius: [0, '90%'],
            label: {
                rotate: 'radial'
            }
        }
    };
    this.options = this.utl.mergeObjects(this.options, this.newOptions);  
  }

}
