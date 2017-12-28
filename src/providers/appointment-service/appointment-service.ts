import { Injectable } from '@angular/core';
import { Http ,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppointmentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppointmentServiceProvider {

  data : any[];

  constructor(public http: Http) {
    console.log('Hello AppointmentServiceProvider Provider');
  }

  getAppointmentResponse()
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({method:"POST",headers:headers})
  
    let data = JSON.stringify(
      {unitNo:1,
        request:"GetAppointmentDetailsRequest",
      unique_token:123456,
      patientID:window.localStorage.getItem('PatientId')
     })
    console.log(data);

    if (this.data) {
          return Promise.resolve(this.data);
        }
      
        return new Promise(resolve => {
          this.http.post('http://192.168.2.185/WebAPI/api/AppointmentDetails',data,options)
            .map(res => res.json().data.AppointmentDetails)
            .subscribe(data => {
              console.log("Appointment List : " +data);
              this.data = data;
              resolve(this.data);
            });
        });
  }
}
