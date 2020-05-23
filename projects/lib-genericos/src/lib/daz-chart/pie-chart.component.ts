import {Component, ChangeDetectorRef, Input,OnChanges } from '@angular/core';
import {LibUtils} from '../daz-general/libs/lib-utils';

@Component({
  selector: 'pie-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class PieChartComponent implements OnChanges {

  options: any = {};
  othersData: any = {
    title: 'Others',
    data: [],
  };
  @Input() chartData: any = {
    title: '',
    data: [],
  };
  @Input() newOptions: any = {}

  @Input() othersVal: any;

  constructor(private cd: ChangeDetectorRef, private utl: LibUtils = new LibUtils()) {}
  
  ngOnChanges() {
    if(this.chartData.data !== undefined){
      if (this.othersVal) {
        for (let i = 0; i < this.chartData.data.length; i++) {
          if(this.chartData.data[i].value<=this.othersVal){
            this.othersData.data.push(this.chartData.data.splice(i,1)[0]);
          }
        }     
      }
      this.options = {  
        title: {
            text: this.chartData.title,
            left: 'center',
            top: 20,
        },
    
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'right',
          data: [...this.chartData.data.map(e => e.name), this.othersVal?this.othersData.title:null],
          selectedMode: true
        },
        series: [
          {
            name: this.chartData.titleSerie,
            type: 'pie',
            radius: this.newOptions.sizeGraphic,
            center: this.newOptions.positionGraphic,
            data: [
              ...this.chartData.data.map((a) => {if (a.title === undefined && a.total === true) {
                return { 'name':a.name, 'value':a.value, tooltip:{formatter:'<div  style="text-align: center;">'+'{a}'+a.total+': {c} ({d}%)'} }
                }else if(a.title === true && a.total === undefined) {
                  return { 'name':a.name, 'value':a.value, tooltip:{formatter:'<div  style="text-align: center;"><div  style="font-weight: bold;">'+a.title+'</div><hr>'+'{b}'+': {c} ({d}%) </div>'} }
                }else if(a.title === undefined && a.total === undefined) {
                  return { 'name':a.name, 'value':a.value, tooltip:{formatter:'<div  style="text-align: center;">'+'<div  style="font-weight: bold;">'+'{a}'+'</div><hr>'+'{b}'+': {c} ({d}%) </div>'} }
                }else{
                  return { 'name':a.name, 'value':a.value, tooltip:{formatter:'<div  style="text-align: center;"><div  style="font-weight: bold;">'+a.title+'</div><hr>'+a.total+': {c} ({d}%) </div>'} }
                }
              }
                 ), 
              this.othersVal?
              { name: this.othersData.title, value: this.othersData.data.reduce((a, c) => { return a+=c.value},0), 
              tooltip: { formatter: '{a}'+'<br/>{b} Total : {c} ({d}%)<br/>'+(this.othersData.data.map(e => e.name+': '+e.value+'<br/>')).toString().replace(',', ' ') }
              }:
              null
            ],
            emphasis: this.newOptions.shadow
        }
        ]
    };
      this.options = this.utl.mergeObjects(this.options, this.newOptions);
      for (let i = 0; i < this.options.series.length; i++) {
        this.options.series[i].type = 'pie';
      }
      this.cd.detectChanges();// Evita el error de cambio de datos de la variable "results"
    }
  }
}
