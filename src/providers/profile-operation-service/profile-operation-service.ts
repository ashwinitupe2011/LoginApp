import { Injectable } from '@angular/core';
import { Http ,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProfileOperationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileOperationServiceProvider {

  userData : any[];

  constructor(public http: Http) {
    console.log('Hello ProfileOperationServiceProvider Provider');
  }


  viewUserDetails(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({method:"POST",headers:headers})
  
    let data = JSON.stringify(
      {
        request:"GetUserDetailsRequest",
      unique_token:123456,
      mobileNo:"",
      registrationNo:window.localStorage.getItem('RegistrationNo')
     })
    console.log(data);

    if (this.userData) {
          return Promise.resolve(this.userData);
        }
      
      
        return new Promise(resolve => {
          this.http.post('http://192.168.2.185/WebAPI/api/UserDetails',data,options)
            .map(res => res.json().data.UserDetails)
            .subscribe(data => {
              console.log("user details : " +data);
              this.userData = data;
              resolve(this.userData);
            });
        });
  }
}
