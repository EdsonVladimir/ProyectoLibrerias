import { Component, OnInit } from '@angular/core';
import { graphic } from 'echarts';
import {LibGenericosService} from 'lib-genericos';
import {GLOBAL} from '../../services/global';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  /* bar-animation-chart */
  public dataBarAnimation : {};
  public optionsBarAnimation: {};

  /*polar-punch-card-chart*/
  public dataPolarPunch : {};
  public optionsPolarPunch : {};
     /*multiple-xaxis-chart*/
  public dataMultipleAxis : {};
  public optionsMultipleAxis : {};

  public sApiUrl : string;
  public sMethod : string;
  public oFinder : any;

  /** */
  public barTickAlignChartData: {};
  public newOptionsBarTickAlign: {};


  setBarAnimation(){
    //***************************************************
    //bar-animation-chart
    //***************************************************
    this.dataBarAnimation = {
      title: 'Ventas por Día',
      xAxisData: {
          com: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      },
      data: [
          {
              title: 'Refresco',
              data: [1, 3, 9, 27, 81, 14, 74],
              tiempo: 10,
          },
          {
              title: 'Papas fritas',
              data: [5, 2, 4, 8, 16, 32, 64],
              tiempo: 1000,
          },
          {
              title: 'Chocolates',
              data: [2, 4, 8, 6, 32, 64, 128],
              tiempo: 500,
          },
          {
              title: 'Sweet',
              data: [2, 4, 8, 6, 32, 64, 128],
              tiempo: 500,
          }
      ]
    }
    this.optionsBarAnimation = {
      title: {
          text: 'Ejemplo Ventas por Día',
          right: 'left',//right, left
          top: 'top'//top, bottom
      },
      color: ['#02FB3B', '#000000', '#AAAAAA'],
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : <b>{c}</b>',
      },
    }
  };

  setPolarPunch(){
    
    this.dataPolarPunch = {
      title: 'Polar Punch Card',
      angleAxis: ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
          '7a', '8a', '9a', '10a', '11a',
          '12p', '1p', '2p', '3p', '4p', '5p',
          '6p', '7p', '8p', '9p', '10p', '11p'],
      radiusAxis: ['Saturday', 'Friday', 'Thursday',
          'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
      data: [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]]
    };
    
    this.optionsPolarPunch = {
        backgroundColor: new graphic.RadialGradient(0.3, 0.3, 0.8, [{
            offset: 0,
            color: '#333' // backGroundColor for graphic
        }]),
        title: {
            text: 'Polar Punch', // title for graphic
            right: 'rigth', // position for title graphic (left, rigth, center)
            textStyle: {
                color: '#FA05F3' // color for title graphic
            }
        },
        colorLine:'#FFFF', // color for line
        colorData: '#35FA05', // color for data (Radio)
        colorDataText: '#FAB705', // color for data (Description)
        colorSeries: '#FA0505' // color for series
    };

  };

  setMultipleAxis(){
    this.dataMultipleAxis = {
      title: 'Bancos',
      datosEjeX: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre','enero'],
      datosEjeY: [
          {
              title: 'Banco BISA',
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          },
          {
              title: 'Banco BCP',
              data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
          },
          {
              title: 'Banco BNB',
              data: [4.9, 8.9, 11.1, 13.7, 48.5, 69.2, 255.6, 46.6, 70.2, 18.4, 14.3, 0.7],
          }
      ]
    };
    this.optionsMultipleAxis = {
      title: {
          right: 'rigth',
          top: 'bottom'
      },
    };

  }
  setBartTickAlign(): void {
    this.barTickAlignChartData = {
        dataXCategory: ['ENERO', 'FEBRERO'],
        dataSeries: [10, 89]
    };
    
    this.newOptionsBarTickAlign = {
        backGroundColor: '#05FA8B',
        color: ['#05FA8B'], // One Color
        tooltip:{
            axisPointer:{
                type: 'shadow' //line | shadow
            }
        },
        grid: {
            left: '5%', // 'Separation left'
            right: '15%', // 'Separion right'
            bottom: '3%', // 'Separation bottom'
        },
    };
}
  getAdf(){
    this.sApiUrl = GLOBAL.urlAdf;
    this.sMethod = 'CuentasDiaGAM1';
    this.oFinder = { 
                    type: 'ParamsREST_RowFinder', 
                    params: [ 
                              { column: 'pMonedaExpresion', 
                                value: 'USD' 
                              }
                            ]
                  };
    this._adfServiceService.getData(this.sApiUrl,this.sMethod,this.oFinder).subscribe(
      result => {

        // if(result['meta'].code != 200){
        //   console.log(result['data'].Products);
        // }else {
        //   this.categorias = result['data'].Products;
        // }
        console.log(result);

      },
      error => {
        console.log(<any>error);
      }
    );
  }
  constructor(
    public _adfServiceService:LibGenericosService,
  ) {
    // this.setBarAnimation();
    // this.setPolarPunch();
    // this.setMultipleAxis();
    // this.getAdf();
    this.setBartTickAlign();

   }

  ngOnInit(): void {
  }

}
