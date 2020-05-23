import { Component, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';

@Component({
  selector: 'bar-category-stack-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class BarCategoryStackChartComponent implements OnChanges {

  options: any = {};
  @Input() chartData: any = {};
  @Input() newOptions: any = {}
  
  constructor(private cd: ChangeDetectorRef, private utl: LibUtils = new LibUtils()) {
  }

  ngOnChanges() {    
    this.options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { 
            type: 'shadow' // line' | 'shadow'
        }
      },
      legend: {
          data: this.chartData.data.map(v=>{return v.title})
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
          type: 'value'
      },
      yAxis: {
          type: 'category',
          data: this.chartData.yAxis
      },
      series: [...this.chartData.data.map(v=>{
        return {
                name: v.title,
                type: 'bar',
                stack: 'same stack put the series in top of each other',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: v.values
              }
      })]
      };

      this.options = this.utl.mergeObjects(this.options, this.newOptions); 
      
      for (let i = 0; i < this.options.series.length; i++) {
        this.options.series[i].type = 'bar';
      }
      this.options.xAxis.type = 'value';
      this.options.yAxis.type = 'category';

      this.cd.detectChanges();
    }

}
