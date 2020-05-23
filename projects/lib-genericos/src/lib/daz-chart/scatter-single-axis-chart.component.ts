import { Component, OnInit,Input } from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';

@Component({
  selector: 'scatter-single-axis-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `
})
export class ScatterSingleAxisChartComponent implements OnInit {

  options: any = {};
  @Input() chartData: any = { 
    title: null,
    xAxis: [],
    yAxis: [],
    data: [[]],
  };
  @Input() newOptions: any = {}

  constructor(private utl: LibUtils = new LibUtils()) { }
  divide(data){
        let arr = [];
        for (let i = 0; i < data.length;) {
          arr.push(data.slice(i, i+24));
          i+=24;
        }
        return arr;
      }
  ngOnInit() {

    var data0 = this.divide(this.chartData.data);

    this.options = {
      title: [...this.chartData.yAxis.map((a, i)=>{ return {
        textBaseline: 'middle',
        top: (i + 0.5) * 100 / 7 + '%',
        text: a
      }})],
      tooltip: { trigger: 'item'},

      singleAxis: [ 
        ...this.chartData.yAxis.map((a, i)=>{ return {
          left: 150,
          type: 'category',
          boundaryGap: false,
          data: this.chartData.xAxis,
          top: (i * 100 / 7 + 5) + '%',
          height: (100 / 7 - 10) + '%',
          axisLabel: {
              interval: 2
          }
          }})
      ],
      series: [
        ...this.chartData.yAxis.map((a, i)=>{           
          return {
        name: a,    
        singleAxisIndex: i,
        coordinateSystem: 'singleAxis',
        type: 'scatter',
        data: data0[i].map((b)=> {
          return { 
            value:[b[1],i],
            symbolSize: b[2]*4,
          }
        }),
        }}
      )]
    };
    this.options = this.utl.mergeObjects(this.options, this.newOptions);  
  }

}
