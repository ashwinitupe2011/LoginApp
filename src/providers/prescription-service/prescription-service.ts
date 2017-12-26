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
  prescriptionDetails : any[];

  constructor(public http: Http) {
    console.log('Hello PrescriptionServiceProvider Provider');
  }
  
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
              console.log("prescription List : " +data);
              this.data = data;
              resolve(this.data);
            });
        });
  }

  getPrescriptionDetailsResponse(prescriptionDate,prescriptionID)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({method:"POST",headers:headers})
  
    let data = JSON.stringify(
      {unitNo:1,
        request:"GetPrescriptionDetailList",
      unique_token:123456,
      prescriptionDate : prescriptionDate,
      prescriptionID : prescriptionID,  
      patientID:window.localStorage.getItem('PatientId')
     })
    console.log(data);

    if (this.prescriptionDetails) {
          return Promise.resolve(this.data);
        }
      
      
        return new Promise(resolve => {
          this.http.post('http://192.168.2.185/WebAPI/api/PrescriptionDetails',data,options)
            .map(res => res.json().data.PrescriptionDetailList)
            .subscribe(data => {
              console.log("prescription details : " +data);
              this.prescriptionDetails = data;
              resolve(this.prescriptionDetails);
            });
        });

  }

}
