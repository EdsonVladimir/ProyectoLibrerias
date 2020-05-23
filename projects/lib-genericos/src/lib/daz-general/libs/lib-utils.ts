import { Injectable } from '@angular/core';
import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class LibUtils {

  constructor(){ }
  /**
   * @function mergeObjects Merge two similar objects
   * @param object1 Object to merge with object2 
   * @param object2 New Object
   */
  mergeObjects(object1, object2){
    let res;
    if(object2){
      res = Object.keys(object2).reduce(function(r, k) {
      if(object1[k]) {
        r[k] = Object.assign(object1[k], object2[k]); //this replace all
      } else {
        r[k] = object2[k];
      }
      return r;
      }, {});
      return Object.assign(object1, res);
    } else {
      return object1;
    }
  } 
  /**
   * @function getType() Get variable type
   * @param v Any variable
   */
  getType(v){
    return v === undefined
            ? 'undefined'
            : v === null
              ? 'null'
              : v.constructor.name.toLowerCase(); 
  } 
  parseXML(data) {
    return new Promise(resolve => {
      var k: string | number,
        dataObj: any,
        arr = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function (err, result) {
        var obj = result.rss.channel[0];        
        for (k in obj.item) {
          var item = obj.item[k];
          arr.push({
            enclosure: item.enclosure[0].$,
            title: item.title[0],
            pubDate: item.pubDate[0],
            author: item.author[0],
            link: item.link[0]
          });
        }
        dataObj = {
          title: obj.title[0],
          link: obj.link[0],
          items: arr
        }             
        resolve(dataObj);
      });
    });
  }  
}
