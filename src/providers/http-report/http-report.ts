import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpReportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpReportProvider {

  constructor(public http: Http) {
    console.log('Hello HttpReportProvider Provider');
  }
  getJsonData(){
    return this.http.get('https://www.reddit.com/r/worldnews/.json').map(res => res.json());
  }

}
