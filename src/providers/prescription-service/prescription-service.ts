import { Injectable } from '@angular/core';
import { Http ,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PrescriptionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrescriptionServiceProvider {
  data : any[];

  constructor(public http: Http) {
    console.log('Hello PrescriptionServiceProvider Provider');
  }

  // load() {
  //   if (this.data) {
  //     // already loaded data
  //     return Promise.resolve(this.data);
  //   }
  
  //   // don't have the data yet
  //   return new Promise(resolve => {
  //     // We're using Angular HTTP provider to request the data,
  //     // then on the response, it'll map the JSON data to a parsed JS object.
  //     // Next, we process the data and resolve the promise with the new data.
  //     this.http.get('http://192.168.2.185/WebAPI/api/Login')
  //       .map(res => res.json())
  //       .subscribe(data => {
  //         // we've got back the raw data, now generate the core schedule data
  //         // and save the data for later reference
  //         this.data = data;
  //         resolve(this.data);
  //       });
  //   });
  // }

  getPrescriptionListResponse(){


    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({method:"POST",headers:headers})
  
    let data = JSON.stringify(
      {unitNo:1,
        request:"GetPrescriptionList",
      unique_token:123456,
      patientID:window.localStorage.getItem('PatientId')
     })
    console.log(data);

    if (this.data) {
          return Promise.resolve(this.data);
        }
      
      
        return new Promise(resolve => {
          this.http.post('http://192.168.2.185/WebAPI/api/PrescriptionList',data,options)
            .map(res => res.json().data.PrescriptionList)
            .subscribe(data => {
              console.log("Login: " +data);
              this.data = data;
              resolve(this.data);
            });
        });
  }

}
