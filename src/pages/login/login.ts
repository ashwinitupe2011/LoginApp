import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading : Loading;


  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController ,private http: Http) { 
    // this.callLogin()
  }

  // callLogin()
  // {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('Accept', 'application/json');

  //   let options = new RequestOptions({method:"POST",headers:headers})
  
  //   let data = JSON.stringify(
  //     {unitNo:1,
  //       request:"GetReportParameterList",
  //     unique_token:123456,
  //     patientID:4681,
  //   }
  //   )

  //   console.log(data);

  //   this.http.post('http://192.168.2.185/WebAPI/api/GetReportDetails',data,options)
  //   .map(res => res.json().data.TestNameList)
  //   .subscribe(res =>
  //   {
  //     this.labSummary = res;
  //     console.log(res);
  //   },
  // (err) =>{
  // });
  // }

  GotoHomePage(username,password)
  {
    console.log(username,password);
    // this.navCtrl.setRoot('HomePage');
  }

  public login()
  {
    this.showLoading()
    this.navCtrl.setRoot('HomePage');
  }

  signuUpFunction()
  {
    console.log("Signup")
  }

  forgotPasswordFunction()
  {
    console.log("Forgot Password")
  }
  // public showError(text)
  // {
  //   this.loading.dismiss();
    
  //   let alert = this.alertCtrl.create(
  //     {
  //       title:'Fail',
  //       subTitle : text,
  //       buttons: ['OK']
  //     }
  //   );
  //   alert.present(prompt);
  // }
  public showLoading()
  {
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait ...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
