import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
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
    let localData = http.get('assets/report.json').map(res => res.json().data.ReportList);
    localData.subscribe(data => {
      this.information = data;
      console.log(this.information)
    })

    console.log("sdj")
  }


  sectionToggle(i)
  {
    console.log(i)
    this.information[i].open = ! this.information[i].open;
  }
  // itemToggle(i,j)
  // {
  //   this.information[i].List[j].open = !this.information[i].List[j].open;
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LabReportDatesPage');
  }
  // toggleSection(i) {
  //   this.information[i].open = !this.information[i].open;
  // }
 
  // toggleItem(i, j) {
  //   this.information[i].List[j].open = !this.information[i].List[j].open;
  // }
}
//   postRequest() {
//     var headers = new Headers();
//     // headers.append("Accept", 'application/json');
//     headers.append('Content-Type', 'application/json' );
//     // let options = new RequestOptions({ headers: headers });
    
// let params = JSON.stringify(
// {'GetPasswordRecoveryRequest':
// {
//     'EmailAddress':"karan@gmail.com"
// }
// })

// alert(params);

//     this.http.post("http://192.168.2.185/WebAPI/api/Password", params, headers)
//       .subscribe(data => {
//         console.log(data['_body']);
//        }, error => {
//         console.log("error",error);// Error getting the data
//       });
//   }

