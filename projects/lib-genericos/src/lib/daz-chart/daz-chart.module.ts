import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { BarAnimationChartComponent } from './bar-animation-chart.component';
import { BarChartComponent } from './bar-chart.component';
import {BarTickAlignComponent} from './bar-tick-align.component';
import { BarCategoryStackChartComponent } from './bar-category-stack-chart.component';
import { BubbleGradientChartComponent } from './bubble-gradient-chart.component';
import { FunelChartComponent } from './funel-chart.component';
import { GaugeChartComponent } from './gauge-chart.component';
import { HeadMapChartComponent } from './head-map-chart.component';
import { LineChartComponent } from './line-chart.component';
import { CandlestickChartComponent } from './candlestick-chart.component';
import { LineMarkerChartComponent } from './line-marker-chart.component';
import { MapChartComponent } from './map-chart.component';
import { MixLineBarChartComponent } from './mix-line-bar-chart.component';
import { MultipleXaxisChartComponent } from './multiple-xaxis-chart.component';
import { PictorialBarSpiritChartComponent } from './pictorial-bar-spirit-chart.component';
import { PolarPunchCardChartComponent } from './polar-punch-card-chart.component';
import { RadarChartComponent } from './radar-chart.component';
import { ScatterSimpleChartComponent } from './scatter-simple-chart.component';
import { ScatterSingleAxisChartComponent } from './scatter-single-axis-chart.component';
import { SunburstVisualMapChartComponent } from './sunburst-visual-map-chart.component';
import {PieChartComponent} from './pie-chart.component';

@NgModule({
  declarations: [
    BarAnimationChartComponent,
    BarChartComponent,
    BarTickAlignComponent,
    BarCategoryStackChartComponent,
    BubbleGradientChartComponent,
    FunelChartComponent,
    GaugeChartComponent,
    HeadMapChartComponent,
    LineChartComponent,
    CandlestickChartComponent,
    LineMarkerChartComponent,
    MapChartComponent,
    MixLineBarChartComponent,
    MultipleXaxisChartComponent,
    PictorialBarSpiritChartComponent,
    PolarPunchCardChartComponent,
    RadarChartComponent,
    ScatterSimpleChartComponent,
    ScatterSingleAxisChartComponent,
    SunburstVisualMapChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  exports: [
    BarAnimationChartComponent,
    BarChartComponent,
    BarTickAlignComponent,
    BarCategoryStackChartComponent,
    BubbleGradientChartComponent,
    FunelChartComponent,
    GaugeChartComponent,
    HeadMapChartComponent,
    LineChartComponent,
    CandlestickChartComponent,
    LineMarkerChartComponent,
    MapChartComponent,
    MixLineBarChartComponent,
    MultipleXaxisChartComponent,
    PictorialBarSpiritChartComponent,
    PolarPunchCardChartComponent,
    RadarChartComponent,
    ScatterSimpleChartComponent,
    ScatterSingleAxisChartComponent,
    SunburstVisualMapChartComponent,
    PieChartComponent
  ]
})
export class DazChartModule { }
