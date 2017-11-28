import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
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
    let localData = http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabReportDatesPage');
  }
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }

  postRequest() {
    var headers = new Headers();
    // headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    // let options = new RequestOptions({ headers: headers });
    
let params = JSON.stringify(
{'GetPasswordRecoveryRequest':
{
    'EmailAddress':"karan@gmail.com"
}
})

alert(params);

    this.http.post("http://192.168.2.185/WebAPI/api/Password", params, headers)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log("error",error);// Error getting the data
      });
  }

}
