import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

/**
 * Generated class for the LabParamDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lab-param-details',
  templateUrl: 'lab-param-details.html',
})
export class LabParamDetailsPage {

  labTestParams : any[];
  
  labNumber :string;
  testName :string;
  reportDate : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
    this.labNumber = this.navParams.get('labNumber');
    this.testName = this.navParams.get('testName');
    this.reportDate = this.navParams.get('reportDate');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabParamDetailsPage');
    this.callGetParamService();
  }

  callGetParamService()
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({method:"POST",headers:headers})
    let data = JSON.stringify(
      {testName:this.testName,
      unique_token:123456,
        unitNo:1,
        request:"GetReportParameterListName",
        labNo: this.labNumber,
        reportDate:this.reportDate ,    
      patientID: window.localStorage.getItem('PatientId')
    }
    )

    console.log(data);
    this.http.post('http://192.168.2.185/WebAPI/api/ReportParameterListName',data,options)
    .map(res => res.json().data.List)
    .subscribe(res =>
    {
      this.labTestParams = res;
    },
  (err) =>{
  });
  }
}
