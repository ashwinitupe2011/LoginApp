import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, IonicPage } from 'ionic-angular';


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
  registerCredentials = { email: '', password: '' };

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController) { 
    
  }

  public createAccount()
  {
   
  }

  GotoHomePage()
  {
    this.navCtrl.setRoot('HomePage');
  }

  

  public login()
  {
    this.showLoading()
    this.navCtrl.setRoot('HomePage');
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
