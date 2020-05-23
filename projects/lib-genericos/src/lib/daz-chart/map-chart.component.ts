import { Component, OnChanges, Input} from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';
import * as echarts from 'echarts';

@Component({
  selector: 'map-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `
})
export class MapChartComponent implements OnChanges {

  options: any = {};
  @Input() chartData: any = [];
  @Input() newOptions: any = {};
  @Input() DataMap: any;
  @Input() NombreMapa: any;
  
  constructor(private utl: LibUtils = new LibUtils()) {
  }
  
  ngOnChanges(){
      if(this.DataMap != undefined){
          echarts.registerMap(this.NombreMapa, this.DataMap);
          this.options = {
          title: {
          text:'DazaSoftware',
          },
          tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c}'
        },
        visualMap: {
          min: 800,
          max: 50000,
          text: ['', ''],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        series: this.chartData
      }
      this.options = this.utl.mergeObjects(this.options, this.newOptions);
    }
  }

}
