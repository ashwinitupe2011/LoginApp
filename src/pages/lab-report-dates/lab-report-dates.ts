import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { LabReportDetailsPage } from '../lab-report-details/lab-report-details'
/**
 * Generated class for the LabReportDatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lab-report-dates',
  templateUrl: 'lab-report-dates.html',
})
export class LabReportDatesPage {

  information: any[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
    // let localData = http.get('assets/report.json').map(res => res.json().data.ReportList);
    // localData.subscribe(data => {
    //   this.information = data;
    //   console.log(this.information)
    // })

    this.callPostData()
    console.log("sdj")
  }

  callPostData()
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
     headers.append('Access-Control-Allow-Origin', '*');
     headers.append('Access-Control-Allow-Credentials', 'true');

    let options = new RequestOptions({method:"POST",headers:headers})
    let data = JSON.stringify(
      {unitNo:1,
        request:"GetReportList",
      unique_token:123456,
      patientID:4681
    }
    )

    this.http.post('http://192.168.2.185/WebAPI/api/ReportList ',data,options)
    .map(res => res.json().data.ReportList)
    .subscribe(res =>
    {
      this.information = res;
      console.log(res);
    },
  (err) =>{
  });
  }
  getLabNumber(labNumber,reportDate)
  {
    console.log(labNumber);
    console.log(reportDate);
    this.navCtrl.setRoot(LabReportDetailsPage,{labNumber:labNumber,reportDate:reportDate});
  }


  sectionToggle(i)
  {
    console.log(i)
    this.information[i].open = ! this.information[i].open;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabReportDatesPage');
  }
}