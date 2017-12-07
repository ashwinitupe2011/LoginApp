import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

/**
 * Generated class for the ReportDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-details',
  templateUrl: 'report-details.html',
})
export class ReportDetailsPage {
  labSummary: any[];
  labNumber : String;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private http: Http) {
    this.callPostData()
    this.labNumber = this.navParams.get('labNumber');
    console.log(this.labNumber);
    console.log("sdj")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportDetailsPage');
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
      patientID:4681,
      labNo:201784,
      reportDate:"07 Dec 2017"
    }
    )

    this.http.post('http://192.168.2.185/WebAPI/api/GetReportDetails',data,options)
    .map(res => res.json().data.TestNameList)
    .subscribe(res =>
    {
      this.labSummary = res;
      alert("success");
      console.log(res);
    },
  (err) =>{
    alert("fail")
  });
  }
  getLabNumber(j)
  {
    console.log(j);
    alert("sdkxjc");
    this.navCtrl.setRoot('ReportDetailsPage');
  }

  sectionToggle(i)
  {
    console.log(i)
    this.labSummary[i].open = ! this.labSummary[i].open;
  }
  }
