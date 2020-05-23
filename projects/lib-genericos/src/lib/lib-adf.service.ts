import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import {GLOBAL} from './daz-general/services/global';
import {AuthenticationService} from './daz-general/services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class LibAdfService {

  public url:string;
  public cookie: any[];
  public httpOptions: {};

  constructor(
    public _http:HttpClient,
    public _authentication:AuthenticationService
  ) { 
    this.url = GLOBAL.urlAdf;
    this.cookie = this._authentication.getCookie();
    this.httpOptions = {
      headers: new HttpHeaders({
        // 'Access-Control-Allow-Methods': 'GET',
        // 'Access-Control-Allow-Origin': 'http://localhost:4200',
        // 'Access-Control-Allow-Credentials': 'true',
        // 'Content-Type': 'application/vnd.oracle.adf.resourceitem+json',
        // 'Cache-Control': 'must-revalidate',
        //'Cookies': this.cookie
       }),
      withCredentials: true
    };

  }
  getData(){
    //return this._http.get('http://ec2-3-214-254-58.compute-1.amazonaws.com:7101/DiaModDiaGAM-RESTWebService-context-root/rest/v1/CuentasDiaGAM1?finder=ParamsREST_RowFinder;pMonedaExpresion=USD',{headers: new HttpHeaders().set('Authorization', 'Bearer '+this.auth)});
    return this._http.get('http://ec2-3-214-254-58.compute-1.amazonaws.com:7101/DiaModDiaGAM-RESTWebService-context-root/rest/v1/CuentasDiaGAM1?finder=ParamsREST_RowFinder;pMonedaExpresion=USD',this.httpOptions);
    //return this._http.get('http://ec2-3-214-254-58.compute-1.amazonaws.com:7101/DiaModDiaGAM-RESTWebService-context-root/rest/v1/CuentasDiaGAM1?finder=ParamsREST_RowFinder;pMonedaExpresion=USD',{headers: new HttpHeaders().set('withCredentials','true')});
  }
}
