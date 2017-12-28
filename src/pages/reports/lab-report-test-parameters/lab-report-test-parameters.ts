import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LabResultGraphPage } from '../lab-result-graph/lab-result-graph'
import { LabParamDetailsPage } from '../lab-param-details/lab-param-details'
/**
 * Generated class for the LabReportTestParametersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lab-report-test-parameters',
  templateUrl: 'lab-report-test-parameters.html',
})
export class LabReportTestParametersPage {
  testResult : any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
    this.callTestResult();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabReportTestParametersPage');
  }


  sectionToggle(i)
  {
    console.log(i)
    this.testResult[i].open = ! this.testResult[i].open;
  }

  callTestResult()
  {
  let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({method:"POST",headers:headers})
    let data = JSON.stringify(
      {unitNo:1,
        request:"GetReportListName",
      unique_token:123456,
      patientID: window.localStorage.getItem('PatientId')
    }
    )

    console.log(data);
    this.http.post('http://192.168.2.185/WebAPI/api/ReportListName',data,options)
    .map(res => res.json().data.ReportListTestName)
    .subscribe(res =>
    {
      this.testResult = res;
      console.log(res);
    },
  (err) =>{
  });
  }

  callReportDetails(labNumber,testName,reportDate)
  {
    console.log(testName);
    console.log(labNumber);
    console.log(reportDate);
    this.navCtrl.push(LabParamDetailsPage,{labNumber:labNumber,reportDate:reportDate,testName:testName});
  }

  goToReportGraph(testName)
  {
    this.navCtrl.push(LabResultGraphPage,{});
  }
  
}
