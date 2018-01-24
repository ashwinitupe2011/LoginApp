import { Injectable } from '@angular/core';
import { Http ,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CreateAppointmnetServieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CreateAppointmnetServieProvider {
  doctorSpeciality : any;
  doctorNameList : any;
  doctorTimeSlotList : any;

  constructor(public http: Http) {
    console.log('Hello CreateAppointmnetServieProvider Provider');
  }


  getDoctorSpeciality(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({method:"POST",headers:headers})
  
    let data = JSON.stringify(
      {unitNo:1,
        request:"GetDoctorSpecialityRequest",
      unique_token:123456
     })
    console.log(data);

    if (this.doctorSpeciality) {
          return Promise.resolve(this.doctorSpeciality);
        }
      
      
        return new Promise(resolve => {
          this.http.post('http://192.168.2.185/WebAPI/api/DoctorSpeciality',data,options)
            .map(res => res.json().data.DoctorSpeciality)
            .subscribe(data => {
              console.log("Specilaity List : " +data);
              this.doctorSpeciality = data;
              resolve(this.doctorSpeciality);
            });
        });
  }

  getDoctorName()
  {
      let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({method:"POST",headers:headers})
  
    let data = JSON.stringify(
      {unitNo:1,
        request:"getDoctorNamesRequest",
      unique_token:123456,
      specialityID:"1"
     })
    console.log(data);

    if (this.doctorNameList) {
          return Promise.resolve(this.doctorNameList);
        }
      
      
        return new Promise(resolve => {
          this.http.post('http://192.168.2.185/WebAPI/api/GetDoctorName',data,options)
            .map(res => res.json().data.DoctorList)
            .subscribe(data => {
              console.log("name List : " +data);
              this.doctorNameList = data;
              resolve(this.doctorNameList);
            });
        });
  }
  

  getDoctorTimeSlots()
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({method:"POST",headers:headers})
  
    let data = JSON.stringify(
      {unitNo:1,
        request:"getTimeSlotsRequest",
      unique_token:123456,
      appDate :"23-Jan-2018",
      doctorID : "183"
     })
    console.log(data);

    if (this.doctorTimeSlotList) {
          return Promise.resolve(this.doctorTimeSlotList);
        }
        return new Promise(resolve => {
          this.http.post('http://192.168.2.185/WebAPI/api/TimeSlots',data,options)
            .map(res => res.json().data.Timeslots[0].List)
            .subscribe(data => {
              console.log("TimeList : " +data);
              this.doctorTimeSlotList = data;
              resolve(this.doctorTimeSlotList);
            });
        });
  }

  createPatientApointment()
  {

  }
}
