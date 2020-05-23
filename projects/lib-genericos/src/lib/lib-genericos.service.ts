import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {GLOBAL} from './daz-general/services/global';
import {AuthenticationService} from './daz-general/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LibGenericosService {

  public url:string;
  public params: any[];
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
  setUrl(sUrl: string,
         sMethod: string,
         oFinder?: { type: string, params: Array<{ column: string, value: any}> },
         limit?: number
        ):string{

    this.url =  sUrl + sMethod +'?';  
    //oFinder
    if (oFinder){
      this.url = this.url.concat(`finder=${oFinder.type};`); 
      for (var i = 0, len = oFinder.params.length; i < len; i++) {
        this.url = this.url.concat(`${oFinder.params[i].column}=${oFinder.params[i].value}`); 
        if((i+1) != oFinder.params.length){
          this.url = this.url.concat(','); 
        }else{
          this.url = this.url.concat('&'); 
        }
      }
    }
    //nLimit
    // if (limit) this.params.push(`${name({limit})}=${limit}`);
    
    // this.params.forEach(e => {
    //   this.url = this.url.concat(`${e}&`);
    // }); 
    return this.url;
  }
  getData (sUrl: string, 
           sMethod: string,
           oFinder?: { type: string, params: Array<{ column: string, value: any}> },
           nlimit?: number
           ):Observable<any>{
    return this._http.get(this.setUrl(sUrl,sMethod,oFinder,nlimit), this.httpOptions);
    
  }
}
