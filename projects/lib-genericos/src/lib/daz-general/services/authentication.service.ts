import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  public cookieAdf: any[];

  constructor() { }
  
  public getCookie():any[]{
    this.cookieAdf = ['1247b2262ccf7737d635d1b649f5bbeca996ab63b1953248330def2ad3d678df=c88b4879eecc44a31cc1165fe9c5ecbad7da9790e0565809ab633875f1f24a0e',
    'c88b4879eecc44a31cc1165fe9c5ecbad7da9790e0565809ab633875f1f24a0e=47f069be7e74504a44ca1f10f2ea02852e8369f33afb6286f7f127a187e89c70',
    'JSESSIONID=5lRQCMPWzbJNZp8GgOQJceoj5owq8U-SjCg56ke8n0MViAXIsXWo!673758770'];
    return this.cookieAdf;
  }

}
