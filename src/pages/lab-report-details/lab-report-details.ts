import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

/**
 * Generated class for the LabReportDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lab-report-details',
  templateUrl: 'lab-report-details.html',
})
export class LabReportDetailsPage {
  labSummary: any[];
  labNumber : String;
  reportDate : String;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
   
    this.labNumber = this.navParams.get('labNumber');
    this.reportDate = this.navParams.get('reportDate');
    console.log(this.reportDate);
    this.callPostData()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabReportDetailsPage');
  }

  callPostData()
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({method:"POST",headers:headers})
  
    let data = JSON.stringify(
      {unitNo:1,
        request:"GetReportParameterList",
      unique_token:123456,
      patientID:window.localStorage.getItem('PatientId'),
      labNo:this.labNumber,
      reportDate:this.reportDate
    }
    )

    console.log(data);

    this.http.post('http://192.168.2.185/WebAPI/api/GetReportDetails',data,options)
    .map(res => res.json().data.TestNameList)
    .subscribe(res =>
    {
      this.labSummary = res;
      console.log(res);
    },
  (err) =>{
  });
  }
  // getLabNumber(j)
  // {
  //   console.log(j);
  //   alert("sdkxjc");
  //   this.navCtrl.setRoot('ReportDetailsPage');
  // }

  sectionToggle(i)
  {
    console.log(i)
    this.labSummary[i].open = ! this.labSummary[i].open;
  }

}
